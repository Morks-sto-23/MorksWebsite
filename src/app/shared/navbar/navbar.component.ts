import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router, RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NzLayoutModule, NzMenuModule, NzIconModule, RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  mobileMenuOpen = false;
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.isActive(path, true);
  }
}
