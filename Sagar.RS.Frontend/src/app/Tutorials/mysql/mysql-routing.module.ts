import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MysqlComponent } from './mysql.component';

const routes: Routes = [{ path: '', component: MysqlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MysqlRoutingModule { }
