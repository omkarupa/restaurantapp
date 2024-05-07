import { KitchenOrderService } from './../../services/kitchen-order.service';
import { KitchenOrder } from './../../common/kitchen-order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-order-list',
  templateUrl: './kitchen-order-list.component.html',
  styleUrl: './kitchen-order-list.component.css'
})
export class KitchenOrderListComponent implements OnInit {

  kitchenOrderList : KitchenOrder [] = [];

  constructor(private kitchenOrderService : KitchenOrderService ){}

  ngOnInit(): void {

  }

  public getKitchenOrderList()
  {
        this.kitchenOrderService.getKitchenOrderList().subscribe(
          response => {
            this.kitchenOrderList = response
          }
        )
  }


}
