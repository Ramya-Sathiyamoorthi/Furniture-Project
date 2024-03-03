import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';
import { FormControl ,FormGroup , Validator, Validators } from '@angular/forms';



@Component({
  selector: 'app-addto-cart',
  templateUrl: './addto-cart.component.html',
  styleUrls: ['./addto-cart.component.scss']
})
export class AddtoCartComponent implements OnInit {
 
  showproduct:any=[];
  public totalamount:number=0; 
  public addressform = false;
  myform:FormGroup|any;
  

  constructor(private product:ProductsService){}
  ngOnInit(): void {
      this.product.products().subscribe(res=>{
        this.showproduct=res;
        //total calcultaion
        this.totalamount = this.product.calcluateprice();
        console.log("total amt is",this.totalamount)
      })
      //form
      this.myform = new FormGroup({
        email:new FormControl('',Validators.required),
        name:new FormControl('',Validators.required),
        mobile:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required),
      })
  }
deleteitem(item:any){
  this.product.removecartitem(item);

}
Empty(){
  this.product.removeallitem();
}
cancel(){
  this.addressform=false;
  this.myform.reset();
}
onsumit(){
   this.myform.value;
   console.log(this.myform.value)
   this.myform.reset();
}
}
  


