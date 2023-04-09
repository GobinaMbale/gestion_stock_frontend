import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategorySaveComponent } from './category-save/category-save.component';
import { CategoryItemComponent } from './category-list/category-item/category-item.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategorySaveComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
