import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditionComponent } from './audition/audition.component'
import { RolesComponent } from './roles/roles.component'

const routes: Routes = [
  {
    path : "",
    component : AuditionComponent //home page
  },
  {
    path: "roles",
    component : RolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
