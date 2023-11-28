import { Injectable } from '@angular/core';
import { RouteObject } from 'src/app/models/route-object.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  groups: RouteObject[][] = [
    [
      { route: '/home', displayname: 'Home' },
      { route: '/about', displayname: 'About us' }
    ],
    [
      { route: '/product', displayname: 'Product' },
      { route: '/contact', displayname: 'Contact' }
    ]
  ];

  getMenuItems() {
    return this.groups;
  }
}
