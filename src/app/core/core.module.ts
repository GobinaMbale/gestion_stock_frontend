import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import {NgxWebstorageModule} from "ngx-webstorage";



@NgModule({
  declarations: [],
  imports: [
    NgxWebstorageModule.forRoot({ prefix: 'app', separator: '_' }),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
