import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/service/usersService';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public totalAmount = "";
  public totalCash = "";
  public twoThousand = "";
  public totaltwoThousand = "";
  public fiveHundred = "";
  public totalfiveHundred = "";
  public twoHundred= "";
  public totaltwoHundred= "";
  public hundread= "";
  public totalhundread= "";
  public SBI= "";
  public PNB= "";
  public PPF= "";
  public POST= "";
  public fixDeposit= "";
  public savingAmount= "";

  constructor(private up:usersService,private spinner: NgxSpinnerService) { }
  public list = [];

  ngOnInit(): void {
    this.spinner.show();
    this.up.getService(this.up.getLatestTreasury()).then(res => {
      if (res) {
        this.totalAmount = res.Msg.totalAmount;
        this.totalCash =res.Msg.totalCash;
        this.twoThousand = res.Msg.twoThousand;
        this.totaltwoThousand = res.Msg.totaltwoThousand;
        this.fiveHundred = res.Msg.fiveHundred;
        this.totalfiveHundred =res.Msg.totalfiveHundred;
        this.twoHundred= res.Msg.twoHundred;
        this.totaltwoHundred= res.Msg.totaltwoHundred;
        this.hundread= res.Msg.hundread;
        this.totalhundread= res.Msg.totalhundread;
        this.SBI= res.Msg.accounts.SBI;
        this.PNB= res.Msg.accounts.PNB;
        this.PPF= res.Msg.accounts.SBIPPF;
        this.POST= res.Msg.accounts.PO;
        this.fixDeposit= res.Msg.fixDeposit;
        this.savingAmount = res.Msg.savingAmount;
        this.spinner.hide();
      }
    });
  }


}
