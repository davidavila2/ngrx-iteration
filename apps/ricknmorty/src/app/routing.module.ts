import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from '@workspace/ui-login';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';
import { AuthGuard } from '@workspace/core-data';
import { NotFoundModule } from '@workspace/not-found';


const routes: Routes = [
  { path: 'projects', canActivate: [AuthGuard], component: ProjectsComponent, children: [] },
  { path: 'projects/:id', component: ProjectsItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'wild', component: NotFoundModule },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }