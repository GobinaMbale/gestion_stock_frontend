import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleItemComponent } from './article-list/article-item/article-item.component';
import { ArticleSaveComponent } from './article-save/article-save.component';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleItemComponent,
    ArticleSaveComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
