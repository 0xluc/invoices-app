import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandsRegisterComponent } from './demands/demands-register/demands-register.component';
import { DemandsComponent } from './demands/demands/demands.component';

const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  { path: 'invoices', component: DemandsComponent },
  { path: 'invoices/register', component: DemandsRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
