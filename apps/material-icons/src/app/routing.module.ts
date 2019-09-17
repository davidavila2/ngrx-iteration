import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workspace/ui-login';
import { NotFoundComponent } from '@workspace/not-found';
import { IconsComponent } from './icons/icons.component';


const route: Routes = [
  { path: '', component: LoginComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'login', component: LoginComponent, data: { app_name: 'icons'}  },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' }
]

@NgModule({
  imports: [
  RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
