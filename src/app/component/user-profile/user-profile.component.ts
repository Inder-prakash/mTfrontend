import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/service/usersService';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private up:usersService,private spinner: NgxSpinnerService) { }
  public list = [];
  ngOnInit(): void {
    this.spinner.show();
    this.up.getService(this.up.userprofile()).then(res => {
      if (res) {
        this.spinner.hide();
        this.list = res.Msg;
      }
    });
  }


}
