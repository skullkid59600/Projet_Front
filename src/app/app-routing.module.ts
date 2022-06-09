import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {IndexComponent} from "./index/index.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {GymnastsComponent} from "./gymnasts/gymnasts.component";
import {TeamsComponent} from "./teams/teams.component";
import {NewsComponent} from "./news/news.component";
import {FaqComponent} from "./faq/faq.component";
import {ChampionshipsComponent} from "./championships/championships.component";
import {LoginComponent} from "./login/login.component";
import {GymlistComponent} from "./gymnasts/gymlist/gymlist.component";

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: 'gymnasts', component: GymlistComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'championships', component: ChampionshipsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: IndexComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
