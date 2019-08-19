import { ProjectsComponent } from './projects/projects.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workspace/ui-login';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@workspace/core-data';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';
import { WildComponent } from '@workspace/wild-card';


const routes: Routes = [
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard], children: [] },
  { path: 'projects/:OwnerId', component: ProjectsItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'wild', component: WildComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }