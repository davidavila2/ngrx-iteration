import { ProjectsComponent } from './projects/projects.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workspace/ui-login';
import { NgModule } from '@angular/core';
import { ProjectsItemsComponent } from './projects/projects-items/projects-items.component';
import { WildComponent } from '@workspace/wild-card';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '', children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'projects', component: ProjectsComponent },
      // changed /:id to /:name and it works
      { path: 'projects/:name', component: ProjectsItemsComponent },
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class RoutingModule {}