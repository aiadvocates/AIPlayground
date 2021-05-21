import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionComponent } from './vision.component';



@NgModule( {
  declarations: [ VisionComponent ],
  exports: [ VisionComponent ],
  imports: [
    CommonModule
  ]
} )
export class VisionModule { }
