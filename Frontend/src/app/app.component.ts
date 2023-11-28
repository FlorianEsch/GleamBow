import { Component, Renderer2, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemeService } from './services/ui/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;
  isSmallScreen: boolean = false;

  constructor(
    private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) 
  {
      this.breakpointObserver
        .observe([Breakpoints.Handset])
        .subscribe(result => {
          this.isSmallScreen = result.matches;
        });
  }

  ngOnInit() {
    this.subscription = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe(result => {
        this.updateBodyClass(result.matches);
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  private updateBodyClass(isSmallScreen: boolean): void {
    const heightValue = isSmallScreen ? '60%' : '100%';
    document.documentElement.style.setProperty('--before-element-height', heightValue);
  }
}
