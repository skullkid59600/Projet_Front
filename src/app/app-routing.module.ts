import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {IndexComponent} from "./index/index.component";
import {FooterComponent} from "./footer/footer.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'notfound', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
