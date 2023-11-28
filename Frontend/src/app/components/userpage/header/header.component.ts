import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../../services/ui/theme.service';
import { MenuService } from 'src/app/services/ui/menu.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RouteObject } from 'src/app/models/route-object.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  groups: RouteObject[][] = [];
  isSmallScreen: boolean = false;
  darkMode: boolean = false;
  private darkModeSubscription: Subscription | undefined;


  constructor(
    private themeService: ThemeService, 
    private menuService: MenuService,
    private breakpointObserver: BreakpointObserver,) 
    {
      this.breakpointObserver
        .observe([Breakpoints.Handset])
        .subscribe(result => {
          this.isSmallScreen = result.matches;
        });
    }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  @Output() toggleSidenav = new EventEmitter<void>();


  ngOnInit(): void {
    this.groups = this.menuService.getMenuItems();
    this.darkModeSubscription = this.themeService.darkMode$.subscribe(isDarkMode => {
      this.darkMode = isDarkMode;
    });
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
