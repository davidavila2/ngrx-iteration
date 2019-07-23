import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workspace/ui-login';
import { WildComponent } from '@workspace/wild-card';
import { ProjectsComponent } from './projects/projects.component';


const route: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
]

@NgModule({
  imports: [
  RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
