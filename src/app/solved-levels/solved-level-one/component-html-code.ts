export const getHtmlCode = (): string => {
  return `<article class="route-window bg-white overflow-auto">
  <span class="d-flex align-items-center p-3 link-dark text-decoration-none border-bottom">
    <span class="fs-5 fw-semibold">Followers</span>
  </span>
  <section class="w-100">
    <scam-alert [type]="AlertType.Light" [message]="'src/app/levels/level-one-reactive'"></scam-alert>
    <scam-alert [type]="AlertType.Info" [message]="'Obsłuż followersów z użyciem RxJS.'"></scam-alert>

    <ng-container *ngIf="vm$ | async as vm">
      <div class="card m-2">
        <div class="card-body border-top p-9">
          <scam-level-header (followClick)="onFollowClick()"></scam-level-header>
          <scam-level-progress [count]="vm.count"></scam-level-progress>
        </div>
      </div>

      <scam-level-followers-list
        [followers]="vm.followers"
        (deleteAllFollowers)="deleteAllFollowers()"
      ></scam-level-followers-list>
    </ng-container>
  </section>
</article>`;
};
