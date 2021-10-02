import { Component, OnInit } from '@angular/core';
import { newTransactionService } from 'src/app/service/newTransactionService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {

  public myForm: FormGroup;
  constructor(private ns:newTransactionService,private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService) {
        this.myForm = formBuilder.group({
          amount: [''], credit: [''],
          debit: [''], description: [''],
          fiveHundred: [''], hundread: [''],
          source: [''], status: [''],
          twoHundred: [''], twoThousand: [''],
          online:[''],cash:['']
        })
    
    this.myForm.get('online')?.valueChanges.subscribe(v => {
      if (v) {
        this.myForm.get('cash')?.reset();
        this.myForm.get('source')?.enable();
        this.myForm.get('amount')?.enable();
      } else {
         this.myForm.get('source')?.disable();
         this.myForm.get('amount')?.disable();
      }
    });

    this.myForm.get('cash')?.valueChanges.subscribe(v => {
      if (v) {
        this.myForm.get('online')?.reset();
        this.myForm.get('fiveHundred')?.enable();
        this.myForm.get('hundread')?.enable();
        this.myForm.get('twoHundred')?.enable();
        this.myForm.get('twoThousand')?.enable();
      } else {
        this.myForm.get('fiveHundred')?.disable();
        this.myForm.get('hundread')?.disable();
        this.myForm.get('twoHundred')?.disable();
        this.myForm.get('twoThousand')?.disable();
      }
    });

    this.myForm.get('credit')?.valueChanges.subscribe(v => {
      if (v) {
        this.myForm.get('debit')?.reset();
        this.myForm.get('debit')?.setValue(0);
      }
    });

    
    this.myForm.get('debit')?.valueChanges.subscribe(v => {
      if (v) {
        this.myForm.get('credit')?.reset();
        this.myForm.get('credit')?.setValue(0);
      }
    });

  }




  onSubmit() {
    this.spinner.show();
    if (this.myForm.value.credit != "" || this.myForm.value.debit != "") {
      if (this.myForm.value.online > 0 || this.myForm.value.cash > 0) {
        if (this.myForm.value.status != "" && this.myForm.value.description != "") {
          var data = {
            "credit": this.myForm.value.credit,
            "debit": this.myForm.value.debit,
            "amount": this.myForm.value.amount,
            "description": this.myForm.value.description,
            "fiveHundred": this.myForm.value.fiveHundred,
            "hundread": this.myForm.value.hundread,
            "source": this.myForm.value.source,
            "status": this.myForm.value.status,
            "twoHundred": this.myForm.value.twoHundred,
            "twoThousand": this.myForm.value.twoThousand,
            "userId": "6151b1cfa4b6987211bf98a6",
            "other":0
          };
          this.ns.postService(this.ns.newTransaction(), data).then(res => { 
            if (res) {
              this.myForm.reset();
              this.spinner.hide();
            }
          });
        }
        else {
          alert("Enter Description or Select Status");
        }
      }
      else {
         alert("Select Either Online Or Cash");
      }
    }
    else {
      alert("SELECT CREDIT OR DEBIT");
    }


  }
  
  ngOnInit(): void {
    this.myForm.get('source')?.disable();
    this.myForm.get('amount')?.disable();
    this.myForm.get('fiveHundred')?.disable();
    this.myForm.get('hundread')?.disable();
    this.myForm.get('twoHundred')?.disable();
    this.myForm.get('twoThousand')?.disable();
    this.myForm.value.status = "Complete";
  }

}
