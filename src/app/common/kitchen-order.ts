import { KitchenOrderItem } from './kitchen-order-item';
export class KitchenOrder {

  constructor(
    public orderId: number,
    public staffName : string,
    public tableNumber : number,
    public overAllStatus : string,
    public kitchenOrderItem : KitchenOrderItem []
  ){}
}
