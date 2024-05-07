import { Order } from "./order";

export class Invoice {

  constructor(
    public invoiceNumber: number,
    public order: Order,
    public totalPrice: number,
    public modeOfPayment: string
  ) {}
}
