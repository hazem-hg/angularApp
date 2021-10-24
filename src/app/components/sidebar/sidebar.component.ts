import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/books', title: 'Books List',  icon:'content_paste', class: '' },
    { path: '/addBook', title: 'Add Book',  icon:'content_paste', class: '' },
    { path: '/logoutt', title: 'Logout',  icon:'logout', class: '' },
  ];
  export const ROUTE: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/login', title: 'Login',  icon:'content_paste', class: '' },
    { path: '/register', title: 'Register',  icon:'content_paste', class: '' },
  ];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }else{
      this.menuItems = ROUTE.filter(menuItem => menuItem);
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  
}
