import { Component, OnInit, AfterViewInit, Input, OnChanges, Renderer2 } from '@angular/core';

import {
  LAYOUT_VERTICAL, SIDEBAR_THEME_DEFAULT, LAYOUT_WIDTH_FLUID, SIDEBAR_WIDTH_FIXED,
  LAYOUT_DETACHED, LAYOUT_HORIZONTAL, SIDEBAR_THEME_DARK
} from '../../shared/models/layout.model';
// import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() isShowing: boolean;

  // layout
  layoutType: string;
  layoutWidth: string;
  leftSidebarTheme: string;
  leftSidebarWidth: string;

  disableWidth: boolean;
  disableSidebarTheme: boolean;
  disabledisableSidebarWidth: boolean;

  rightSidebarClass = 'right-bar-enabled';

  constructor(private renderer: Renderer2,
              // private eventService: EventService
  )
  {
    // listen to event and open/hide the right sidebar
    // this.eventService.subscribe('toggleRightSideBar', () => {
    //   this.toggleRightSideBar();
    // });
    //
    // // show
    // this.eventService.subscribe('showRightSideBar', () => {
    //   this.show();
    // });
    //
    // // hide
    // this.eventService.subscribe('hideRightSideBar', () => {
    //   this.hide();
    // });
  }

  ngOnInit() {
    // default settings
    this.layoutType = LAYOUT_VERTICAL;
    this.layoutWidth = LAYOUT_WIDTH_FLUID;
    this.leftSidebarTheme = SIDEBAR_THEME_DARK;
    this.leftSidebarWidth = SIDEBAR_WIDTH_FIXED;

    this.disableSidebarTheme = false;
    this.disableWidth = false;
    this.disabledisableSidebarWidth = false;
  }

  ngAfterViewInit() { }

  ngOnChanges() {
    if (this.isShowing) {
      // document.body.classList.add('right-bar-enabled');
      this.renderer.addClass(document.body, this.rightSidebarClass);
    } else {
      this.renderer.removeClass(document.body, this.rightSidebarClass);
    }
  }

  /**
   * Toggle the sidebar
   */
  public toggleRightSideBar() {
    if (document.body.classList.contains(this.rightSidebarClass)) {
      this.renderer.removeClass(document.body, this.rightSidebarClass);
    } else {
      this.renderer.addClass(document.body, this.rightSidebarClass);
    }
  }

  /**
   * Shows the sidebar
   */
  public show() {
    setTimeout(() => {
      this.isShowing = true;
      this.renderer.addClass(document.body, this.rightSidebarClass);
    }, 100);
  }

  /**
   * Hide the sidebar
   */
  public hide() {
    if (document.body.classList.contains(this.rightSidebarClass)) {
      this.renderer.removeClass(document.body, this.rightSidebarClass);
      this.isShowing = false;
    }
  }

  /**
   * Change the given layout
   * @param layout layout name
   */
  public changeLayout(layout: string) {
    this.layoutType = layout;

    switch (this.layoutType) {
      case LAYOUT_DETACHED:
        this.disableSidebarTheme = true;
        this.disableWidth = true;
        this.disabledisableSidebarWidth = false;
        break;
      case LAYOUT_VERTICAL:
        this.disableSidebarTheme = false;
        this.disableWidth = false;
        this.disabledisableSidebarWidth = false;
        break;
      case LAYOUT_HORIZONTAL:
        this.disableSidebarTheme = true;
        this.disableWidth = false;
        this.disabledisableSidebarWidth = true;
        break;
    }
    // this.eventService.broadcast('changeLayout', layout);
  }

  /**
   * Change the width
   * @param layout width type
   */
  public changeLayoutWidth(width: string) {
    this.layoutWidth = width;
    // this.eventService.broadcast('changeLayoutWidth', width);
  }

  /**
   * Change the side bar theme
   * @param theme name
   */
  public changeSidebarTheme(theme: string) {
    this.leftSidebarTheme = theme;
    if (this.layoutType === LAYOUT_VERTICAL) {
      setTimeout(() => {
        // this.eventService.broadcast('changeLeftSidebarTheme', theme);
      }, 100);
    }
  }

  /**
   * Change the side bar width
   * @param type type of sidebar
   */
  public changeLeftSidebarType(type: string) {
    this.leftSidebarWidth = type;
    setTimeout(() => {
      if (this.layoutType === LAYOUT_VERTICAL || this.layoutType === LAYOUT_DETACHED) {
        // this.eventService.broadcast('changeLeftSidebarType', type);
      }
    }, 100);
  }

  /**
   * Reset everything
   */
  public reset() {
    this.changeLayout(LAYOUT_VERTICAL);
    this.changeLayoutWidth('fluid');
    this.changeLeftSidebarType(SIDEBAR_WIDTH_FIXED);
    this.changeSidebarTheme(SIDEBAR_THEME_DEFAULT);
  }
}
