import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { index } from './component';
import { NewTransactionComponent } from './component/new-transaction/new-transaction.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ViewAlltransacaitonsComponent } from './component/view-alltransacaitons/view-alltransacaitons.component';
import { ViewAlltreasuryComponent } from './component/view-alltreasury/view-alltreasury.component';


const routes: Routes = [
  { path: '', component: index },
  { path: 'newEntry', component: NewTransactionComponent },
  { path: 'viewUser', component: UserProfileComponent },
  { path: 'alltransaction', component: ViewAlltransacaitonsComponent },
   { path:'alltreasury',component:ViewAlltreasuryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
