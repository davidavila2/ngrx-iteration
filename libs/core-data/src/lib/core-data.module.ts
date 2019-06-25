import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { ItemsService } from './items/items.service';
import { TokenInterceptorService } from './auth/token-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ItemsService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreDataModule {}
