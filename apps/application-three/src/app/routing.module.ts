
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workspace/ui-login';
import { ProjectsComponent } from './projects/projects.component';
import { WildCardModule } from '@workspace/wild-card';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'wild', component: WildCardModule },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }