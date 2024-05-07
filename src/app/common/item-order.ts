import { MenuItem } from "./menu-item";
import { Order } from "./order";

export class ItemOrder {

  constructor(
    public itemOrderId: number,
    public menuItem: MenuItem,
    public quantity: number,
    public subTotal: number,
    public kitchenItemStatus: string
  ) {}


}
