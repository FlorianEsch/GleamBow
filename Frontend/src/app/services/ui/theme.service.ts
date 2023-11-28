import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: any;
  private darkMode = false;

  constructor(private http: HttpClient) {

    this.loadThemes().subscribe(data => {
      console.log('Themes loaded:', data);
      this.themes = data;
      this.darkMode = true;
      this.applyTheme(this.themes.schemes.dark);
    });

  }
  
  loadThemes(): Observable<any> {
    return this.http.get('../../../assets/theme/theme.json');
  }
  private _darkModeSubject = new BehaviorSubject<boolean>(this.darkMode);

  get darkMode$(): Observable<boolean> {
    return this._darkModeSubject.asObservable();
  }
  

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    this._darkModeSubject.next(this.darkMode);
    if (this.darkMode) {
      this.applyTheme(this.themes.schemes.dark);
    } else {
      this.applyTheme(this.themes.schemes.light);
    }
  }
  applyTheme(theme: any): void {
    Object.keys(theme).forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    });
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
