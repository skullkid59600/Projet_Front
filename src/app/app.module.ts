import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {NewsComponent} from './news/news.component';
import {FaqComponent} from './faq/faq.component';
import {LoginComponent} from './login/login.component';
import {GymnastsComponent} from './gymnasts/gymnasts.component';
import {ChampionshipsComponent} from './championships/championships.component';
import {TeamsComponent} from './teams/teams.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    NewsComponent,
    FaqComponent,
    LoginComponent,
    GymnastsComponent,
    ChampionshipsComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
