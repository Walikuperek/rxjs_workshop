import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterBadgeComponent } from './components/counter-badge/counter-badge.component';
import { ContentAuthorsCounterComponent } from './content-authors-counter.component';

@NgModule({
  declarations: [CounterBadgeComponent, ContentAuthorsCounterComponent],
  imports: [CommonModule],
  exports: [ContentAuthorsCounterComponent],
})
export class ContentAuthorsCounterModule {}
