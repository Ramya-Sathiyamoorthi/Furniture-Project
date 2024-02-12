import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  
  productData:any=[];
  constructor(config: NgbRatingConfig,private product:ProductsService,private cartservice:CartService, private activatedroute:ActivatedRoute, private router:Router){
    config.max=5;
    config.readonly =true;
  }
  showAdd:boolean=true;
  removeAdd:boolean=false;

  ngOnInit(): void {
this.getelementsbyid();
  }
getelementsbyid(){
  let productId=this.activatedroute.snapshot.paramMap.get('productId');
console.log(productId);
productId && this.product.getproductbyid(productId).subscribe((result:any)=>{
this.productData=result;
console.log(this.productData)
  })
  
}
addtoCart(){
  if (this.productData){
    console.log(this.productData);
  }
}
buyNow(){ 
  this.router.navigateByUrl('/cart');
}}



