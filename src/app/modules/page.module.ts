import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreUiModule } from './coreui.module';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    /**Forms */
    FormsModule,
    ReactiveFormsModule,
    /**Styles */
    CoreUiModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    /**Forms */
    FormsModule,
    ReactiveFormsModule,
    /**Styles */
    CoreUiModule,
    MaterialModule,
  ]
})

export class PageModule { }
