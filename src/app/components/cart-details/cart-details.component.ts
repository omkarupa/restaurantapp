import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;


  constructor(private cartService: CartService,private router: Router){}

  ngOnInit(): void {
    this.getCardItems();
  }


  getCardItems()
  {
    this.cartItems =  this.cartService.getCartItems();
    console.log('Item added to cart:', this.cartItems);
  }

  addMenuItems(){
    this.router.navigateByUrl('menu-items');
  }

  updateSubtotal(cartItem: CartItem){

    console.log(cartItem.subTotal = cartItem.price * cartItem.quantity);

    this.calculateTotals();

  }

  calculateTotals() {
    this.totalQuantity = this.cartItems.reduce((total,item) => total + (+item.quantity) ,0);
    this.totalPrice = this.cartItems.reduce((total,item) => total + (+item.quantity * +item.price),0);
    console.log(this.totalQuantity);


  }





}
