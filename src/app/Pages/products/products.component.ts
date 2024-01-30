import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  apiUrl = 'http://localhost:3000/products';
  disc5 : any = new FormControl('');

  constructor(config: NgbRatingConfig, private productService:ProductsService,private activatedRoute:ActivatedRoute) {
    config.max=1;
    config.readonly =true;
  }
 
  
  ngOnInit(): void {
    this.getallProducts();
    this.getallProductsbycategory();
    
  }
  productList:any[]=[];
  
  getallProductsbycategory(){
      let categoryproduct = this.activatedRoute.snapshot.paramMap.get('category');
      console.log(categoryproduct);
      categoryproduct && this.productService.getproductbycategory(categoryproduct).subscribe((result:any)=>{
        this.productList=result;
        console.log(this.productList)
      })
     
  
  }

  getallProducts(){
     this.productService.getproduct().subscribe((result:any)=>{
      this.productList=result;
      console.log(this.productList);
    })
  }
  sofaFilter(){
    this.productService.sofafilter().subscribe((result1:any)=>{
      this.productList=result1;
      console.log(this.productList);

    })
  }
  bedFilter(){
    this.productService.bedfilter().subscribe((result2:any)=>{
      this.productList=result2;
      console.log(this.productList);
    })
  }
  tableFilter(){
    this.productService.tablefilter().subscribe((result3:any)=>{
      this.productList=result3;

    })
  }
  cupboardFilter(){
    this.productService.cubboardfilter().subscribe((result4:any)=>{
      this.productList=result4;
      console.log(this.productList);
    })
  }
  swingFilter(){
    this.productService.swingfilter().subscribe((result5:any)=>{
      this.productList=result5;
      console.log(this.productList);

    })
  }
  babyFilter(){
    this.productService.babyfilter().subscribe((result6:any)=>{
      this.productList=result6;
      console.log(this.productList);
    
    })
  }
chairFilter(){
  this.productService.chairfilter().subscribe((result7:any)=>{
    this.productList=result7;
    console.log(this.productList);
  })
}

isFilterApplied(){
  if(this.apiUrl.includes('?')){
    this.apiUrl = this.apiUrl + "&";
  }else{
    this.apiUrl = this.apiUrl + "?";
  }
}
discFilter(discountPercent: string){

  console.log(this.disc5);
  this.isFilterApplied();
  this.apiUrl = this.apiUrl + "discount=" + discountPercent + "%";
  this.productService.getProductsByFilter(this.apiUrl).subscribe(
    (response) => {
      console.log(response);
    },
    err => {
      console.log(err);
    }
  )
}

}
