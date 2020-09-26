import { Component, OnInit, AfterViewInit, Input, OnChanges } from '@angular/core';
// import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-horizontal-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit, OnChanges {
  showMobileMenu: boolean;

  @Input() isBoxed: boolean;
  @Input() demo: string;

  topbarCssClasses: string;
  topNavContainerCssClasses: string;
  topNavCssClasses: string;

  // constructor(private eventService: EventService) { }

  ngOnInit() {
    this.topbarCssClasses = this.demo === 'creative' ? 'topnav-navbar-dark' : '';
    this.topNavContainerCssClasses = this.demo === 'creative' ? 'shadow-sm' : '';
    this.topNavCssClasses = this.demo === 'creative' ? 'navbar-light' : 'navbar-dark';
  }

  /**
   * On prop change, apply layout settings
   */
  ngOnChanges() {
    if (this.isBoxed) {
      document.body.setAttribute('data-layout-mode', 'boxed');
    } else {
      document.body.removeAttribute('data-layout-mode');
    }
  }

  /**
   * On view init - activating horizontal layout
   */
  ngAfterViewInit() {
    document.body.setAttribute('data-layout', 'topnav');
  }

  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    // this.eventService.broadcast('showRightSideBar');
  }

  /**
   * On mobile toggle button clicked
   */
  onToggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
