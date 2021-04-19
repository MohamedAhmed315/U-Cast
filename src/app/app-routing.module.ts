import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditionComponent } from './audition/audition.component'
import { RolesComponent } from './roles/roles.component'
import { FeedbackComponent } from './feedback/feedback.component'

const routes: Routes = [
  {
    path : "",
    component : AuditionComponent //home page
  },
  {
    path: "/roles",
    component : RolesComponent
  },
  {
    path: "/feedback",
    component: FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
