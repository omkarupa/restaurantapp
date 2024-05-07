export class CartItem {

  constructor(
    public menuItemId: number,
    public itemName: string,
    public price: number,
    public ingredients: string,
    public category: string,
    public imageURLPath: string,
    public quantity: number,
    public subTotal : number
  ) {}



}
