import { Order } from '../../common/order';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {

  orderList : Order [] = [];

  itemPrinted = false;

  constructor(private orderService : OrderService ){}

  ngOnInit(): void {
    this.getOrderList();
  }

  public getOrderList()
  {
    this.orderService.getOrderList().subscribe
    (response => {
      this.orderList = response
      console.log(this.orderList)
    })
  }

}
