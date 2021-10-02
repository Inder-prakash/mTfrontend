import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { usersService } from '../service/usersService';


@Component({
  selector: 'app-transaction',
    templateUrl: './index.html'
})
export class index implements OnInit {

  constructor( private spinner: NgxSpinnerService , private us:usersService ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.us.getService(this.us.getLatestTreasury()).then(result => {
      if (result) {
        this.spinner.hide();
      }  
    });
  }

}
