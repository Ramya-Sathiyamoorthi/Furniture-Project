import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(  private router:Router, private product :ProductsService) {
   
  }
  // apiUrl = 'http://localhost:3000/products';
 
  ngOnInit(): void {
    
  }
  productList:any[]=[];
  categoryfilters(){
    this.product.getproduct().subscribe((result:any)=>{
      this.productList=result
      console.log(this.productList);
    })
  }

  categoryfilter(category :String){
   
    // this.apiUrl=this.apiUrl+"?category="+category;
   this.router.navigateByUrl('/product')


}
}

