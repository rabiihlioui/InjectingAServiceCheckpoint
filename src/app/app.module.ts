import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { HiredCvComponent } from './hired-cv/hired-cv.component';
import { HiredCvItemComponent } from './hired-cv-item/hired-cv-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    HiredCvComponent,
    HiredCvItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
