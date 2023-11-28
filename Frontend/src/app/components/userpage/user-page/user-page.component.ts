import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements AfterViewInit{
  @ViewChild('placeholderDiv') placeholderDiv!: ElementRef;
  @ViewChild('HeaderRef', { read: ElementRef }) HeaderRef!: ElementRef;
  isSidebarVisible = false;

  handleToggleSidenav() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const headerHeight = this.HeaderRef.nativeElement.offsetHeight;
    this.renderer.setStyle(this.placeholderDiv.nativeElement, 'height', `${headerHeight}px`);
  }
}
