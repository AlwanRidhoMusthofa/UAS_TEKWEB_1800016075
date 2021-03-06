import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { StockComponent } from './stock/stock.component'

const routes: Routes = [  {
  path: 'login',
  component: LoginComponent
},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'stock',
  component: StockComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
