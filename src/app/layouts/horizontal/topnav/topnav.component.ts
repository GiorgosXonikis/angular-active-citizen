import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';

import { MENU } from '../../shared/config/menu-meta';
import { activateMenuItems, resetMenuItems } from './utils';


@Component({
  selector: 'app-horizontal-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit, OnChanges, AfterViewInit {
  // declare menu items
  menuItems = [];

  @Input() showMobileMenu: boolean;
  @Input() navCssClasses: string;
  @Input() navContainerCssClasses: string;

  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges() {
    this._activateMenuFromUrl();
  }

  ngAfterViewInit() {
    this._activateMenuFromUrl();
  }

  /**
   * Activate menu from url
   */
  _activateMenuFromUrl() {
    // reset
    resetMenuItems();

    // activate
    activateMenuItems();
  }

  /**
   * Initilize
   */
  initialize(): void {
    this.menuItems = MENU;
    this.showMobileMenu = false;
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasChildren(item: any) {
    return item.children !== undefined ? item.children.length > 0 : false;
  }

  /**
   * On menu click
   */
  onMenuClick(event: any) {
    const nextEl = event.target.nextSibling;
    if (nextEl && !nextEl.classList.contains('show')) {
      const parentEl = event.target.parentNode;
      if (parentEl) { parentEl.classList.remove('show'); }

      nextEl.classList.add('show');
    }
    return false;
  }

}
