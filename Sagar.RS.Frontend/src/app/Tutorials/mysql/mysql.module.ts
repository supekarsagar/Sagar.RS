import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MysqlRoutingModule } from './mysql-routing.module';
import { MysqlComponent } from './mysql.component';
import { MysqlSideMenuComponent } from './_shared/mysql-side-menu/mysql-side-menu.component';
import { TutIntroComponent } from './tut-intro/tut-intro.component';


@NgModule({
  declarations: [
    MysqlComponent,
    MysqlSideMenuComponent,
    TutIntroComponent
  ],
  imports: [
    CommonModule,
    MysqlRoutingModule
  ]
})
export class MysqlModule { }
