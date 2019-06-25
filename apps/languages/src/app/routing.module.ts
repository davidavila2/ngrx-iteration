import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LanguagesComponent } from './languages/languages.component';
import { LoginComponent } from '@workspace/ui-login';
import { AuthGuard } from '@workspace/core-data';
import { WildComponent } from '@workspace/wild-card';



const route: Route[] = [
  { path: 'languages', canActivate: [AuthGuard], component: LanguagesComponent, children: []  },
  { path: 'languages/:id', component: LanguagesComponent },
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
