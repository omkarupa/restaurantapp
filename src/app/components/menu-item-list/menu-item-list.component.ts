import { MenuItem } from './../../common/menu-item';
import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../../services/menu-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { RestaurantTable } from '../../common/restaurant-table';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrl: './menu-item-list.component.css'
})
export class MenuItemListComponent implements OnInit {

  menuItemList : MenuItem [] = [];

  categorySelected : string= '';

  table : RestaurantTable | undefined;

  constructor(private menuItemService : MenuItemService,private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ){}

   public ngOnInit(): void {

    this.route.params.subscribe(params => {
      const objectParam = JSON.parse(params['objectParam']);
      // Now you can use the objectParam object
      this.table = objectParam;

      this.router.navigate(['/menu-items']);
    });

    console.log(' tbale : ' + this.table?.tableNumber);

    if(this.table == undefined || this.table?.tableNumber == undefined)
      {
        this.router.navigateByUrl('tables');
      }
      else{
        this.listMenuItems()
      }


  }

  listMenuItems()
  {

    if(this.route.snapshot.paramMap.has('id'))
      {
        this.route.params.subscribe(
          (params) => {
            this.categorySelected = params['id'];
            console.log('category selected ' + this.categorySelected)

            this.menuItemService.getMenuItemsByCategory(this.categorySelected).subscribe
            (
              response => {
                this.menuItemList = response
              }
            )


          }
        )
      }
      else{
        this.menuItemService.getMenuItemList().subscribe
        ( response => {
          this.menuItemList = response
        })
      }

  }

  addToCart(menuItem : MenuItem) {
    this.cartService.addToCart(menuItem);
    console.log('Item added to cart:', this.cartService.getCartItems());
    this.router.navigateByUrl('/cart');

  }




}
