import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'' , redirectTo:'user' , pathMatch:'full'},
  { path: 'mysql', loadChildren: () => import('./Tutorials/mysql/mysql.module').then(m => m.MysqlModule) },
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
