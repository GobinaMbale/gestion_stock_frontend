import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {layoutsRouters} from "./layout/layout.route";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  ...layoutsRouters
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
