import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
  ],
  providers: [
    provideImgixLoader("https://maciejwojcik.imgix.net")
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
