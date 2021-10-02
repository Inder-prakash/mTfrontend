import { Injectable } from "@angular/core";

@Injectable()
export class AppConfig {
  geturl() {
    //  let base = "http://localhost:8080/";
   let base = "https://mtracks.herokuapp.com/";
    return base;
  }

  public getTreasuryByUserId = "getTreasuryByUserId?userId=6151b1cfa4b6987211bf98a6";
  public getTransactionByUserId = "getTransactionByUserId?userId=6151b1cfa4b6987211bf98a6";
  public newTransaction = "newTransaction";
  public activate = "";
  public getLatestTreasury = "getLatestTreasury?userId=6151b1cfa4b6987211bf98a6";
}



