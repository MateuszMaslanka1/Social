import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoPageComponent} from "./info-page/info-page.component";


const routes: Routes = [
  {path: '', component: InfoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
