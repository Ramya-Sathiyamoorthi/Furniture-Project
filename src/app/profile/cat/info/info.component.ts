import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  edit1:boolean=true;
  edit2:boolean=true;
  edit3:boolean=true;
  edit4:boolean=true;
ProfileDetails:any=[];
  userProfileForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName : new FormControl(''),
    gender: new FormControl(''),
    mail : new FormControl(''),
    mobile: new FormControl('')
  })

  ProfileDetail(){
  this.ProfileDetails.push(this.userProfileForm)  ;
  sessionStorage.setItem("Details",this.ProfileDetails);
  console.log(this.userProfileForm)
  }

  


}
