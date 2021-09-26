import { Injectable } from "@angular/core";

@Injectable()
export class AppConfig {
  geturl() {
    //  let base = "http://localhost:8080/";
   let base = "https://mtracks.herokuapp.com/";
    return base;
  }

  public getTreasuryByUserId = "getTreasuryByUserId?userId=614efaaf24dca67636d065a6";
  public getTransactionByUserId = "getTransactionByUserId?userId=614efaaf24dca67636d065a6";
  public newTransaction = "newTransaction";
  public activate = "";
}