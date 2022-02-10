import {Difficulty} from './Difficulty.enum';
import {NavPages} from './NavPage.enum';

export interface IPage {
    isActive: boolean;
    name: string;
    difficulty: Difficulty;
    description: string;
    route: string;
    navPage: NavPages;
}
