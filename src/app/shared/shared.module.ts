import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from './pipe/filter.pipe';



@NgModule({
  declarations: [FilterPipe],
  imports: [
    CommonModule

  ],
  exports:[FilterPipe]
})
export class SharedModule { }
