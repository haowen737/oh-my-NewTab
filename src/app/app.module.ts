import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule,
  JsonpModule, Jsonp, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { StageSquareComponent } from './stage-square/stage-square.component';
import { WeatherEmptyComponent } from './weather/weather-empty.component';
import { WeatherLoadingComponent } from './weather/weather-loading.component';
import { WeatherNormalComponent } from './weather/weather-normal.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherComponent } from './weather/weather.component';
import { ClockComponent } from './clock/clock.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';

import { WeatherStatusService } from './weather/weather-status.service';
import { IpLocationService } from './weather/iplocation.service';
import { StageService } from './stage-square/stage.service';
import { WeatherService } from './weather/weather.service';
import { WindowService } from './window.service';

import { StageDirective } from './stage-square/stage.directive';
import { WeatherStatusDirective } from './weather/weather-status.directive';

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
    StageDirective,
    WeatherStatusDirective,
    WeatherEmptyComponent,
    WeatherLoadingComponent,
    WeatherNormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    WeatherComponent,
    BookmarksComponent,
    WeatherEmptyComponent,
    WeatherLoadingComponent,
    WeatherNormalComponent
  ],
  providers: [
    StageService,
    WindowService,
    WeatherService,
    IpLocationService,
    WeatherStatusService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
