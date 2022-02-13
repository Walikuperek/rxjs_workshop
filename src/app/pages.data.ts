import {IPage} from './core/models/IPage.interface';
import {Difficulty} from './core/models/Difficulty.enum';
import {NavPages} from './core/models/NavPage.enum';

/**
 * Pages data for every possible page in the app.
 */
export const PAGES: IPage[] = [
    /** Levels below */
    {
        name: 'Level 1',
        route: 'level-1',
        description: 'Przykład wykorzystania zwykłego angulara do obsługi followersów',
        isActive: true,
        difficulty: Difficulty.Easy,
        navPage: NavPages.Levels,
        isReactive: false,
    },
    {
        name: 'Level 1 - reactive',
        route: 'level-1-reactive',
        description: 'Przykład ulepszonej obsługi followersów dzięki RxJS',
        isActive: false,
        difficulty: Difficulty.Easy,
        navPage: NavPages.Levels,
        isReactive: true,
    },
    {
        name: 'Level 2',
        route: 'level-2',
        description: 'CRUD service z grami',
        isActive: false,
        difficulty: Difficulty.Medium,
        navPage: NavPages.Levels,
        isReactive: false,
    },
    {
        name: 'Level 2 - reactive',
        route: 'level-2-reactive',
        description: 'Przykład serwisu CRUD z grami w oparciu o RxJS',
        isActive: false,
        difficulty: Difficulty.Medium,
        navPage: NavPages.Levels,
        isReactive: true,
    },
    {
        name: 'Level 3',
        route: 'level-3',
        description: 'Przesył danych pomiędzy komponentami',
        isActive: false,
        difficulty: Difficulty.Hard,
        navPage: NavPages.Levels,
        isReactive: false,
    },
    {
        name: 'Level 3 - reactive',
        route: 'level-3-reactive',
        description: 'Przykład zastosowania wzorca EventBus w RxJS',
        isActive: false,
        difficulty: Difficulty.Hard,
        navPage: NavPages.Levels,
        isReactive: true,
    },
    /** Solved below */
    {
        name: 'Level 1',
        route: 'solved-level-1',
        description: 'Rozwiązanie zadania 1 - Followers',
        isActive: true,
        difficulty: Difficulty.Easy,
        navPage: NavPages.Solved,
        isReactive: false,
    },
    {
        name: 'Level 2',
        route: 'solved-level-2',
        description: 'Rozwiązanie zadania 2 - CRUD Service',
        isActive: true,
        difficulty: Difficulty.Medium,
        navPage: NavPages.Solved,
        isReactive: false,
    },
    {
        name: 'Level 2',
        route: 'solved-level-3',
        description: 'Rozwiązanie zadania 3 - Event Bus',
        isActive: true,
        difficulty: Difficulty.Hard,
        navPage: NavPages.Solved,
        isReactive: false,
    },
];
