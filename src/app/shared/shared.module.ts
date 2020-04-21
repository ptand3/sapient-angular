import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe' ;
import  {KeysPipe} from './custom.pipe';

@NgModule({
  declarations: [ 
    SortPipe,
    KeysPipe

  ],
  imports: [ 
    CommonModule
  ],
  exports:[     
    SortPipe,
    KeysPipe
   ]
})
export class SharedModule { }
