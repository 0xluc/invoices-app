import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandsComponent } from './demands/demands.component';
import { DemandsRegisterComponent } from './demands-register/demands-register.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
@NgModule({
  declarations: [DemandsComponent, DemandsRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextareaModule,
    InputTextModule,
    ProgressSpinnerModule,
    CalendarModule,
    InputNumberModule,
    InputSwitchModule,
    ConfirmPopupModule,
  ],
})
export class DemandsModule{}
