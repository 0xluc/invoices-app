import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices/invoices.component';
import { RouterModule } from '@angular/router';
import { InvoicesRegisterComponent } from './invoices-register/invoices-register.component';



@NgModule({
  declarations: [
    InvoicesComponent,
    InvoicesRegisterComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class InvoicesModule { }
