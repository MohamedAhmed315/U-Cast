import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditionComponent } from './audition/audition.component'

const routes: Routes = [
  {
    path : "",
    component : AuditionComponent //home page
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
