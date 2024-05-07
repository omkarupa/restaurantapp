import { OrderService } from './../../services/order.service';
import { Order } from './../../common/order';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {

  order: Order | undefined;

  orderId : number = 0;

  constructor(private route: ActivatedRoute,private orderService : OrderService){}


  ngOnInit(): void {

    if(this.route.snapshot.paramMap.has('id'))
      {
        this.route.params.subscribe
        ( (params) => {
            this.orderId = params['id'];

            console.log('Order Id ' + this.orderId);
            this.getOrderDetailsById(this.orderId)
        })
      }
  }

  public getOrderDetailsById(orderId : number)
  {
      this.orderService.getOrderById(orderId).subscribe
      ( response => this.order = response)
  }



}
