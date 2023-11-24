import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesRegisterComponent } from './invoices/invoices-register/invoices-register.component';
import { InvoicesComponent } from './invoices/invoices/invoices.component';

const routes: Routes = [
  {path: '', redirectTo: 'invoices', pathMatch: 'full'},
  {path: 'invoices', component: InvoicesComponent},
  {path: 'invoices/register', component: InvoicesRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
