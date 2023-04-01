import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import {LayoutModule} from "./layout/layout.module";


@NgModule({
  declarations: [
    MemberComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
