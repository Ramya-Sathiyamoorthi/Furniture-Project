import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-car-slide',
  templateUrl: './car-slide.component.html',
  styleUrls: ['./car-slide.component.scss']
})
export class CarSlideComponent implements OnInit {
  constructor ( private productService : ProductsService){}
  ngOnInit(): void {
    this.PremiumDeals();
    this.BestDeals();
  }
productlist:any[]=[];
productlist1:any[]=[];

PremiumDeals(){
  this.productService.preFilter().subscribe((result:any)=>{
    this.productlist=result
    console.log(this.productlist)
  })
}

BestDeals(){
  this.productService.bestFilter().subscribe((result:any)=>{
    this.productlist1=result
    console.log(this.productlist1);
  })
}


}