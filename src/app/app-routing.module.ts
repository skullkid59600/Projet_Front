import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {IndexComponent} from "./index/index.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {GymnastsComponent} from "./gymnasts/gymnasts.component";
import {TeamsComponent} from "./teams/teams.component";
import {NewsComponent} from "./news/news.component";
import {FaqComponent} from "./faq/faq.component";

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: 'gymnasts', component: GymnastsComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'faq', component: FaqComponent},
  {path: '', component: IndexComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
