import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeServiceService {
  private isSmallScreenSource = new BehaviorSubject<boolean>(false);
  isSmallScreen = this.isSmallScreenSource.asObservable();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isSmallScreenSource.next(result.matches);
      });
  }
}
