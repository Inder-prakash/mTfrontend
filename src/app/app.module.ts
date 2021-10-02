import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './configuration/app.config';
import { usersService } from './service/usersService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { index } from './component';
import { NewTransactionComponent } from './component/new-transaction/new-transaction.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ViewAlltransacaitonsComponent } from './component/view-alltransacaitons/view-alltransacaitons.component';
import { ViewAlltreasuryComponent } from './component/view-alltreasury/view-alltreasury.component';
import { treasuryService } from './service/treasuryService';
import { transactionService } from './service/transactionService';
import { newTransactionService } from './service/newTransactionService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    index,
    NewTransactionComponent,
    UserProfileComponent,
    ViewAlltransacaitonsComponent,
    ViewAlltreasuryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [AppConfig,usersService,treasuryService,transactionService,newTransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
