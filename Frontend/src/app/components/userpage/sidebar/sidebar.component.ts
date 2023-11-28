import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { RouteObject } from 'src/app/models/route-object.model';
import { MenuService } from 'src/app/services/ui/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  groups: RouteObject[][] = [];
  isSmallScreen: boolean = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private menuService: MenuService) {
      this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
    }
  
  ngOnInit() {
    this.groups = this.menuService.getMenuItems();
  }
  
}
