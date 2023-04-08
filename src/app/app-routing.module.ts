import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberComponent} from "./member/member.component";
import {PublicComponent} from "./public/public.component";
import {AuthGuard} from "./member/core/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    loadChildren: () => import('./member/member.module').then(m => m.MemberModule)
  },
  {
    path: '',
    component: PublicComponent,
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
