import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { FirstPage } from '../first/first.page';
import { SecondPage } from '../second/second.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'first',
        component: FirstPage
      },
      {
        path: 'second',
        component: SecondPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/second',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class MenuRoutingModule { }
