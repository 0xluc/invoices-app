import { Component } from '@angular/core';
import { navData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  navData = navData
  selectedNav = this.navData[0]

}
