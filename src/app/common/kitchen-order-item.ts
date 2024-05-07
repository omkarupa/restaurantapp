export class KitchenOrderItem {

  constructor(
    public itemOrderId : number,
    public itemName : string,
    public ingredients: string,
    public quantity : number,
    public category : string,
    public kitchenItemStatus : string

  ){

  }


}
