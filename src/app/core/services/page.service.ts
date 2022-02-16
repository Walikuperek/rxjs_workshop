import { Injectable, OnDestroy } from '@angular/core';
import { IPage } from '../models/IPage.interface';
import { BehaviorSubject, merge, Subscription } from 'rxjs';
import { PAGES } from '../../pages.data';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { NavPages } from '../models/NavPage.enum';

interface IPageState {
  pages: IPage[];
  currentNavPage: NavPages;
}

const initState: IPageState = {
  pages: PAGES,
  currentNavPage: NavPages.Levels,
};

@Injectable()
export class PageService implements OnDestroy {
  private _store$ = new BehaviorSubject<IPageState>(initState);
  private _subscription: Subscription;

  // -----------------------------------------------------------------------------
  // @ Public Accessors
  get currentValue(): IPageState {
    return this._store$.getValue();
  }

  public pages$ = this._store$.pipe(
    map((state) => state.pages),
    distinctUntilChanged()
  );

  public currentNavPage$ = this._store$.pipe(
    map((state) => state.currentNavPage),
    distinctUntilChanged()
  );

  // -----------------------------------------------------------------------------
  // @ Lifecycle
  constructor() {
    this._subscription = merge(this.currentNavPage$).subscribe((navPage) =>
      this._pageChanged(navPage)
    );
  }

  public ngOnDestroy() {
    this._subscription.unsubscribe(); /* Don't ever forget to unsubscribe from previously created observables! */
  }

  // -----------------------------------------------------------------------------
  // @ Public API
  public setNavPage(navPage: NavPages) {
    this._pageChanged(navPage);
  }

  // -----------------------------------------------------------------------------
  // @ Private
  private _pageChanged(navPage: NavPages) {
    this._update({
      ...this._store$.getValue(),
      pages: PAGES.filter((page) => page.navPage === navPage),
    });
  }

  private _update(state: IPageState) {
    this._store$.next(state);
  }
}
