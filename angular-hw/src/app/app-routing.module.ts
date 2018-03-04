import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Repositories } from './repositories.component';
import { FollowingComponent } from './following.component';

const routes: Routes = [
  { path: 'repositories/:login', component: Repositories },
  { path: 'following/:login', component: FollowingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


