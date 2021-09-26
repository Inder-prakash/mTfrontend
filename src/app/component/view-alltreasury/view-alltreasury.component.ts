import { Component, OnInit } from '@angular/core';
import { treasuryService } from 'src/app/service/treasuryService';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-view-alltreasury',
  templateUrl: './view-alltreasury.component.html',
  styleUrls: ['./view-alltreasury.component.css']
})
export class ViewAlltreasuryComponent implements OnInit {


  constructor(private ts: treasuryService,private spinner: NgxSpinnerService) { }
  public list = [];
 
  ngOnInit(): void {
    this.spinner.show();
    this.ts.getService(this.ts.TresuryList()).then(res => {
      if (res) {
        this.spinner.hide();
        this.list = res.Msg;
      }
    });
  }
  
}
