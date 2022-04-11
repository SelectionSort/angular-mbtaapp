import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TraintripListComponent} from './components/traintrip-list/traintrip-list.component';
import {HttpClientModule} from '@angular/common/http'
import {TraintripService} from './services/traintrip.service';

@NgModule({
  declarations: [
    AppComponent,
    TraintripListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TraintripService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
