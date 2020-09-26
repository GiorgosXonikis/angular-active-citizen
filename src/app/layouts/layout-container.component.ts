import { Component, OnInit, AfterViewInit } from '@angular/core';

import { environment } from '../../environments/environment';
// import { EventService } from './../core/services/event.service';
import {
  LAYOUT_VERTICAL, LAYOUT_HORIZONTAL, LAYOUT_DETACHED, SIDEBAR_THEME_DEFAULT,
  LAYOUT_WIDTH_FLUID, LAYOUT_WIDTH_BOXED, SIDEBAR_WIDTH_FIXED, SIDEBAR_THEME_DARK} from './shared/models/layout.model';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit, AfterViewInit {

  // layout related config
  layoutType: string;
  layoutWidth: string;
  leftSidebarTheme: string;
  leftSidebarWidth: string;

  configuredDemo: string;

  // constructor(private eventService: EventService) { }

  ngOnInit() {

    // default settings
    // this.configuredDemo = environment.demo;

    // tslint:disable-next-line: max-line-length
    this.layoutType = this.configuredDemo === 'creative' ? LAYOUT_HORIZONTAL : (this.configuredDemo === 'modern' ? LAYOUT_DETACHED : LAYOUT_VERTICAL);

    this.layoutWidth = LAYOUT_WIDTH_FLUID;
    this.leftSidebarTheme = SIDEBAR_THEME_DARK;
    this.leftSidebarWidth = SIDEBAR_WIDTH_FIXED;

    // listen to event and change the layout, theme, etc
    // this.eventService.subscribe('changeLayout', (layout) => {
    //   this.layoutType = layout;
    // });
    //
    // this.eventService.subscribe('changeLayoutWidth', (width) => {
    //   this.layoutWidth = width;
    // });
    //
    // this.eventService.subscribe('changeLeftSidebarTheme', (theme) => {
    //   this.leftSidebarTheme = theme;
    // });
    //
    // this.eventService.subscribe('changeLeftSidebarType', (type) => {
    //   this.leftSidebarWidth = type;
    // });
  }

  ngAfterViewInit() {
    document.body.classList.remove('authentication-bg');
  }

  /**
   * Check if the vertical layout is requested
   */
  isVerticalLayoutRequested() {
    return this.layoutType === LAYOUT_VERTICAL;
  }

  /**
   * Check if the horizontal layout is requested
   */
  isHorizontalLayoutRequested() {
    return this.layoutType === LAYOUT_HORIZONTAL;
  }

  /**
   * Check if the detached layout is requested
   */
  isDetachedLayoutRequested() {
    return this.layoutType === LAYOUT_DETACHED;
  }

  /**
   * Is boxed layout requeted
   */
  isBoxedRequested() {
    return this.layoutWidth === LAYOUT_WIDTH_BOXED;
  }
}
