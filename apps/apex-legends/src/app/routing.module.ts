import { ApexComponent } from './apex/apex.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workspace/ui-login';
import { NgModule } from '@angular/core';
import { ApexItemsComponent } from './apex/apex-items/apex-items.component';
import { NotFoundComponent } from '@workspace/not-found';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'apex', component: ApexComponent },
  { path: 'apex/:id', component: ApexItemsComponent },
  { path: 'login', component: LoginComponent, data: { app_name: 'apex' } },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }