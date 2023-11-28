import { Component, HostListener, Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import {  
  CdkDragDrop, 
  moveItemInArray } from '@angular/cdk/drag-drop';
  import { ScreenSizeServiceService } from '../../../services/ui/screen-size-service.service';

// Define the interface outside of the class
interface MyObject {
  name: string;
  header: string
  id: number;
  stringArray: string[];
  imageURL: string;
  visibility: boolean;
  position: number;
}

@Component({
  selector: 'app-main-content-page',
  templateUrl: './main-content-page.component.html',
  styleUrls: ['./main-content-page.component.scss']
})

export class MainContentPageComponent implements OnInit {
  constructor(private screenSizeService: ScreenSizeServiceService) {}

  ngOnInit() {
    this.screenSizeService.isSmallScreen.subscribe(isSmallScreen => {
      this.updateLogoContainer(isSmallScreen);
    });
  }

  private updateLogoContainer(isSmallScreen: boolean): void {
    const heightValue = isSmallScreen ? '70%' : '50%';
    document.documentElement.style.setProperty('--logo-container-width', heightValue);
  }
  
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    let scaleFactor = 1;
      const logo = document.getElementById('logo') as HTMLImageElement;
      const referenceElement = document.getElementById('logo') as HTMLElement;
      var scaleX = referenceElement.getBoundingClientRect().width / referenceElement.offsetWidth;
      if (logo) {
        const rect = logo.getBoundingClientRect();
        const logoCenterX = rect.left + rect.width / 2;
        const logoCenterY = rect.top + rect.height / 2;

        scaleFactor = logo.offsetHeight/  window.innerWidth;
       
        const scaledX = event.clientX * scaleX;
        const scaledY = event.clientY * scaleX;
        
        const deltaX = scaledX - logoCenterX;
        const deltaY = scaledY - logoCenterY;
  
        
        // Adjust the divisor to control sensitivity for rotation
        const sensitivity = 50; 
        let rotationX = -deltaY / sensitivity;  // Inverted the sign here
        let rotationY = deltaX / sensitivity;
  
        // Limit the rotation to prevent flipping
        const maxRotation = 10;
        rotationX = Math.max(Math.min(rotationX, maxRotation), -maxRotation);
        rotationY = Math.max(Math.min(rotationY, maxRotation), -maxRotation);
  
        // Calculate shadow properties
        const shadowX = deltaX / sensitivity;
        const shadowY = deltaY / sensitivity;
        const shadowBlur = Math.sqrt(shadowX * shadowX + shadowY * shadowY) / 2;
        const shadowColor = `rgba(0, 0, 0, 0.5)`; // Customize as needed
        if(scaleFactor > 0.739){rotationY= 0; rotationX= 0;}
        // Apply both rotation and shadow
        logo.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
        logo.style.filter = `drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor})`;
      }
  }
}
