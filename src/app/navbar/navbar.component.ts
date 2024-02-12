import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ProductsService } from '../service/products.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public cartitems:number=0;
  constructor(public product :ProductsService, public user:UsersService){
  }
  ngOnInit(): void {
    
  
  }

}
