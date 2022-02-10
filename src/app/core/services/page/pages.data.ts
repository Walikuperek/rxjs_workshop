import {IPage} from '../../models/IPage.interface';
import {Difficulty} from '../../models/Difficulty.enum';
import {NavPages} from '../../models/NavPage.enum';

/**
 * Pages data for every possible page in the app.
 */
export const PAGES: IPage[] = [
    {
        name: 'Level 1 - imperatywnie',
        route: 'level-1',
        description: 'Przykład wykorzystania zwykłego angulara do obsługi followersów',
        isActive: true,
        difficulty: Difficulty.Easy,
        navPage: NavPages.Levels
    },
    {
        name: 'Level 1 - reaktywnie',
        route: 'level-1/reaktywnie',
        description: 'Przykład ulepszonej obsługi followersów dzięki RxJS',
        isActive: false,
        difficulty: Difficulty.Easy,
        navPage: NavPages.Levels
    },
];
