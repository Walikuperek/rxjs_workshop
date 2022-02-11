import {Component} from '@angular/core';


@Component({
    selector: 'app-solved-level-one',
    templateUrl: './solved-level-one.component.html'
})
export class SolvedLevelOneComponent {

    public codeFiles: {name: string; code: string; }[] = [];

    private _wholeServiceCode = getWholeServiceCode();
    private _whileComponentTS = getWholeComponentTSCode();

    constructor() {
        this.codeFiles.push(
            {
                name: 'followers-reactive.service.ts',
                code: this._wholeServiceCode
            },
            {
                name: 'level-one-reactive.component.ts',
                code: this._whileComponentTS
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
            map(res => res.followers)
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
            tap(() => this._count$.next(this._count$.getValue() + 1)),
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
}
`;
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
