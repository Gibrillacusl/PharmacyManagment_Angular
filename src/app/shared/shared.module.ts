import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from './pipe/filter.pipe';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [FilterPipe, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[FilterPipe]
})
export class SharedModule { }
