import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    BadgeModule,
    RippleModule,
    SelectButtonModule,
    ButtonModule,
    StyleClassModule,
    RouterModule
  ],
  exports:[
    SidenavComponent
  ]
})
export class CoreModule { }
