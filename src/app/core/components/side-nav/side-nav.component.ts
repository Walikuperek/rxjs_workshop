import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { NavPages } from '../../models/NavPage.enum';

@Component({
  selector: 'core-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public NavPages = NavPages;

  constructor(public pageService: PageService) {}

  ngOnInit(): void {}

  public setPage(page: NavPages) {
    this._setActiveClass(page);
    this.pageService.setNavPage(page);
  }

  private _setActiveClass(page: NavPages = NavPages.Levels) {
    const levels = document.getElementById('levels_handle');
    const solved = document.getElementById('solved_handle');
    if (levels && solved) {
      levels.classList.remove('active');
      solved.classList.remove('active');
      switch (page) {
        case NavPages.Levels:
          levels.classList.add('active');
          break;
        case NavPages.Solved:
          solved.classList.add('active');
          break;
      }
    }
  }
}
