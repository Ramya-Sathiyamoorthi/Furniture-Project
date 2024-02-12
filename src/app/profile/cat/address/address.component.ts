import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    
  }
  AddressDetails:any=[];
  Name:any="";
  PhoneNo:any="";
  locality:any="";
  Pincode:any="";
  Address:any="";
  district:any="";
  state :any="";
  address_type:any="";
  screen1:boolean=false;
  screen2:boolean=false               ;
  [x: string]: any;
  clickAddress(){
    this.screen1=true;
  }
  clearAddress(){
    this.Name="";
    this.PhoneNo="";
    this.locality="";
    this.Pincode="";
    this.Address="";
    this.district="";
    this.state ="";
    this.address_type="";
  }
  showAddress(){
    this.screen2=true;
    this.screen1=false;
    this.AddressDetails.push(this.Name)
    sessionStorage.setItem("Address",this.AddressDetails)
    console.log(this.AddressDetails)
  }
}
