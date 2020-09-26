import { Component, OnInit, AfterViewInit, Input, OnChanges, ViewChild,  ElementRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import MetisMenu from 'metismenujs/dist/metismenujs';

import { MENU } from '../config/menu-meta';
import { MenuItem } from '../models/menu.model';
import { activateMenuItems, resetMenuItems } from './utils';
import {AuthService} from '../../../core/services/auth.service';
import {IUser} from '../../../core/models/interfaces';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() includeLogo: boolean;
  @Input() navClasses: string;
  @Input() includeUserProfile: boolean;
  @Input() isCondensed: boolean;
  @Input() isScrollable: boolean;

  // loggedInUser: User;
  loggedInUser: IUser;
  sidebarScrollRef: any;

  // declare menu items
  menuItems = [];
  menu: any;

  @ViewChild('sideMenu') sideMenu: ElementRef;

  constructor(router: Router, private authService: AuthService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
      }
    });

    this.loggedInUser = this.authService.user;
  }

  ngOnInit() {
    this.initialize();
  }

  ngAfterViewInit() {
    // activate menu item
    this._initMenu();
  }


  /**
   * On prop change, look for layout settings
   */
  ngOnChanges() {
    if ((!this.isCondensed && this.sideMenu) || this.isCondensed) {
      setTimeout(() => {
        this._initMenu();
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }


  /**
   * Activate the parent dropdown
   * TODO: This is hard-coded check - change to some common way
   */
  _activateMenuDropdown() {
    const activeClass = 'mm-active';
    const dropdownActiveClass = 'mm-show';

    resetMenuItems(activeClass, dropdownActiveClass);
    activateMenuItems(activeClass, dropdownActiveClass);
  }

  /**
   * Initizes metis menu
   */
  _initMenu() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);
    this._activateMenuDropdown();
  }

  /**
   * Initilize
   */
  initialize(): void {
    this.menuItems = MENU;
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.children !== undefined ? item.children.length > 0 : false;
  }

  /**
   * Hides the menubar
   */
  hideMenu() {
    document.body.classList.remove('sidebar-enable');
  }
}
