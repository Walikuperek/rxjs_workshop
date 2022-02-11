import {Component, VERSION} from '@angular/core';


@Component({
    selector: 'app-solved-level-one',
    templateUrl: './solved-level-one.component.html'
})
export class SolvedLevelOneComponent {
    public version = VERSION;
    public codeFiles: { name: string; code: string; }[] = [];

    private _wholeServiceCode = getWholeServiceCode();
    private _wholeComponentTS = getWholeComponentTSCode();
    private _wholeComponentHTML = getWholeHtmlCode();

    constructor() {
        this.codeFiles.push(
            {
                name: 'followers-reactive.service.ts',
                code: this._wholeServiceCode
            },
            {
                name: 'level-one-reactive.component.ts',
                code: this._wholeComponentTS
            },
            {
                name: 'level-one-reactive.component.html',
                code: this._wholeComponentHTML
            }
        );
    }
}

function getWholeServiceCode(): string {
    return `import {Injectable} from '@angular/core';
import {FollowersHttpSimulator, IFollower} from '../../fake-backend/followers.backend';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map, shareReplay, switchMap, tap} from 'rxjs/operators';

@Injectable()
export class FollowersReactiveService {
    private _count$ = new BehaviorSubject<number>(0);
    private _refreshEvent$ = new BehaviorSubject<boolean>(false);

    public followers$: Observable<IFollower[]> = merge(this._refreshEvent$).pipe(
            switchMap(() => this._http.get()),
            map(res => res.followers),
            tap((followers) => this._count$.next(followers.length)),
        );

    public count$ = this._count$.asObservable();

    constructor(private _http: FollowersHttpSimulator) {
    }

    public count(): number {
        return this._count$.getValue();
    }

    public findOne(id: string): Observable<IFollower | undefined> {
        return this._http.getOne(id);
    }

    public create(follower: IFollower): Observable<IFollower> {
        return this._http.post(follower).pipe(
            tap(() => this._refreshEvent$.next(true))
        );
    }

    public delete(follower: IFollower): Observable<{ deleted: boolean }> {
        return this._http.delete(follower).pipe(
            tap(() => this._refreshEvent$.next(true))
        );
    }

    public deleteAll(): Observable<{ deleted: boolean }> {
        return this._http.deleteAll().pipe(
            tap(() => this._refreshEvent$.next(true))
        );
    }
}`;
}

function getWholeComponentTSCode(): string {
    return `import {Component, OnDestroy, OnInit} from '@angular/core';
import {FollowersHttpSimulator, IFollower} from '../../fake-backend/followers.backend';
import {FollowersReactiveService} from './followers-reactive.service';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'level-one-reactive',
    templateUrl: './level-one-reactive.component.html'
})
export class LevelOneReactiveComponent implements OnInit, OnDestroy {

    public vm$: Observable<{count: number; followers: IFollower[]}> | null = null;

    constructor(
        public followersRxService: FollowersReactiveService,
        private _fakeBackend: FollowersHttpSimulator
    ) {
    }

    ngOnInit() {
        this.vm$ = combineLatest([
            this.followersRxService.count$,
            this.followersRxService.followers$
        ]).pipe(
            map(([count, followers]) => ({count, followers}))
        );
    }

    ngOnDestroy(): void {
        this.followersRxService.deleteAll();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Handlers
    public onFollowClick(): void {
        this.addFollower();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    public addFollower() {
        const follower = this._fakeBackend.randomFollower();
        this.followersRxService.create(follower).subscribe();
    }

    public deleteOne(follower: IFollower) {
        this.followersRxService.delete(follower).subscribe();
    }

    public deleteAllFollowers() {
        if (this.followersRxService.count() === 0) {
            return alert('Brak followersów do usunięcia');
        }
        const confirmed = confirm('Czy na pewno chcesz usunąć wszystkich followers?');
        if (confirmed) {
            this.followersRxService.deleteAll().subscribe();
        }
    }

}
`;
}

function getWholeHtmlCode(): string {
    return `<article class="route-window bg-white overflow-auto">
    <span class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <span class="fs-5 fw-semibold">Followers</span>
    </span>
    <section class="w-100">
        <ng-container *ngIf="vm$ | async as vm">
            <div class="card m-2">
                <div class="card-body border-top p-9">
                    <scam-level-header (followClick)="onFollowClick()"></scam-level-header>
                    <scam-level-progress [count]="vm.count"></scam-level-progress>
                </div>
            </div>

            <!--  Followers list  -->
            <div class="card m-2 h-full">
                <div class="card-body">
                    <div class="card-title d-flex align-items-center"><h5 class="mb-0">Lista followersów</h5>
                        <div class="ms-auto text-end">
                            <a href="#" (click)="deleteAllFollowers(); $event.preventDefault();"
                               class="text-sm font-semibold">Unfollow all</a></div>
                    </div>
                    <div class="list-group gap-4">
                        <div *ngIf="vm.count === 0 || !vm.followers"
                             class="list-group-item d-flex align-items-center border rounded">
                            Brak followersów
                        </div>
                        <div *ngFor="let follower of vm.followers"
                             class="list-group-item d-flex align-items-center border rounded">
                            <div class="me-4">
                                <div class="avatar rounded-circle"><img alt="..." src="{{follower.avatar}}" width="36">
                                </div>
                            </div>
                            <div class="flex-fill">
                                <a href="#"
                                   routerLink="/level-1/follower/{{follower.id}}"
                                   class="d-block h6 font-semibold mb-1">
                                    {{follower.name}}
                                </a>
                                <span class="d-block text-sm text-muted">{{follower.job}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ng-container>
    </section>
</article>`;
}
