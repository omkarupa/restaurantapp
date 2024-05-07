import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemListComponent } from './components/menu-item-list/menu-item-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { ItemOrderListComponent } from './components/item-order-list/item-order-list.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';


const routes: Routes = [
  {path: 'menu-items',component: MenuItemListComponent},
  {path: 'tables',component: TableListComponent},
  {path: 'category/:id',component: MenuItemListComponent},
  {path: 'tables',component: TableListComponent},
  {path: 'kitchen-prepare-list',component: ItemOrderListComponent},
  {path: 'cart',component: CartDetailsComponent},
  {path: 'orders',component: OrderListComponent},
  {path: 'orders/:id',component: OrderDetailsComponent},
  {path: 'invoices',component: InvoiceListComponent,children:[
    {path: ':id',component: InvoiceDetailsComponent},
  ]},
  {path: '' ,redirectTo: 'menu-items',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
