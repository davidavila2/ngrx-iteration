import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from '@workspace/ui-login';


const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'projects', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class RoutingModule {}