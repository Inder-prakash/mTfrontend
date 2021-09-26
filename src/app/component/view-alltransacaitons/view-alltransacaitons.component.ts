import { Component, OnInit } from '@angular/core';
import { transactionService } from 'src/app/service/transactionService';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-view-alltransacaitons',
  templateUrl: './view-alltransacaitons.component.html',
  styleUrls: ['./view-alltransacaitons.component.css']
})
export class ViewAlltransacaitonsComponent implements OnInit {

    public list = [];
  constructor(private ts:transactionService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.ts.getService(this.ts.Alltransactions()).then(res => {
      if (res) {
        this.spinner.hide();
        this.list = res.Msg;
      }
    });
  }

}
