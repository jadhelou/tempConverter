import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempUnitComponent } from './temp-unit/temp-unit.component';
import { TextboxComponent } from './textbox/textbox.component';
import { ButtonComponent } from './button/button.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { PopUpComponent } from './pop-up/pop-up.component'


@NgModule({
  declarations: [
    AppComponent,
    TempUnitComponent,
    TextboxComponent,
    ButtonComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [ 
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopUpComponent]
})
export class AppModule { }
