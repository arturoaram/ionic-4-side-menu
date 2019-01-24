import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { FirstPage } from '../first/first.page';
import { SecondPage } from '../second/second.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'first',
        outlet: 'menucontent',
        component: FirstPage
      },
      {
        path: 'second',
        outlet: 'menucontent',
        component: SecondPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/(menucontent:second)',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class MenuRoutingModule { }
