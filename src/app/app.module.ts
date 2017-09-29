import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ClockComponent } from './clock/clock.component';
import { MenuComponent } from './menu/menu.component';
import { StageSquareComponent } from './stage-square/stage-square.component';
import { WeatherComponent } from './weather/weather.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

import { StageDirective } from './stage-square/stage.directive';
import { StageService } from './stage-square/stage.service';
import { WindowService } from './window.service';
import { WeatherService } from './weather/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchBarComponent,
    ClockComponent,
    MenuComponent,
    StageSquareComponent,
    WeatherComponent,
    BookmarksComponent,
    StageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule
  ],
  entryComponents: [WeatherComponent, BookmarksComponent],
  providers: [StageService, WindowService, WeatherService],
  bootstrap: [AppComponent]
})

export class AppModule { }
