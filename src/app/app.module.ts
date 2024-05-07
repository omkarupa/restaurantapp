import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemListComponent } from './components/menu-item-list/menu-item-list.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { ItemOrderListComponent } from './components/item-order-list/item-order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { KitchenOrderListComponent } from './components/kitchen-order-list/kitchen-order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemListComponent,
    TableListComponent,
    OrderListComponent,
    OrderDetailsComponent,
    InvoiceListComponent,
    InvoiceDetailsComponent,
    ItemOrderListComponent,
    HeaderComponent,
    CartDetailsComponent,
    KitchenOrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
