import { RestaurantTableService } from './../../services/restaurant-table.service';
import { HttpClient } from '@angular/common/http';
import { RestaurantTable } from './../../common/restaurant-table';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent implements OnInit {

  tableList : RestaurantTable[] = [];

  constructor(private restaurantTableService: RestaurantTableService,private router: Router){}

  ngOnInit(): void {
    this.getRestaurantTableList()
  }

  public getRestaurantTableList()
  {
    this.restaurantTableService.getRestaurantTableList().subscribe
    ( response => {
      this.tableList = response;
    })
  }

  public goToMenuItems(table : RestaurantTable)
  {
    console.log(table);
    this.router.navigate(['menu-items',{objectParam: JSON.stringify(table)}]);
  }

}
