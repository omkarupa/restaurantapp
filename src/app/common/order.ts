import { ItemOrder } from "./item-order";
import { RestaurantTable } from "./restaurant-table";
import { Staff } from "./staff";

export class Order {
  constructor(
    public orderId: number,
    public staff: Staff,
    public restaurantTable: RestaurantTable,
    public statusTable: string,
    public itemsOrderedList: ItemOrder[],
    public totalPrice: number
  ) {}
}
