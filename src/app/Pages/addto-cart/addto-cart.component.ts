import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-addto-cart',
  templateUrl: './addto-cart.component.html',
  styleUrls: ['./addto-cart.component.scss']
})
export class AddtoCartComponent implements OnInit {
 
  ngOnInit(): void {
  }
  
constructor( private cartservice:CartService){}

}
