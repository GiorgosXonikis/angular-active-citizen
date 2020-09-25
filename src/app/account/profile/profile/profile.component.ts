import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData: any;
  @ViewChild('barChartCanvas', { static: true }) canvas: ElementRef;

  constructor() { }

  ngOnInit() {
    this._changeChartjsDefaults();
    this._fetchData();
  }

  /**
   * Change few default settings of chartjs
   */
  _changeChartjsDefaults() {
    const draw3 = Chart.controllers.bar.prototype.draw;
    Chart.controllers.bar = Chart.controllers.bar.extend({
      draw() {
        draw3.apply(this, arguments);
        const ctx = this.chart.chart.ctx;
        const fill = ctx.fill;
        ctx.fill = function () {
          ctx.save();
          ctx.shadowColor = 'rgba(0,0,0,0.01)';
          ctx.shadowBlur = 20;
          ctx.shadowOffsetX = 4;
          ctx.shadowOffsetY = 5;
          fill.apply(this, arguments);
          ctx.restore();
        };
      }
    });

    // default config
    Chart.defaults.global.defaultFontColor = '#8391a2';
    // Chart.defaults.scale.gridLines.color = '#8391a2';
    Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell, \
          "Helvetica Neue",sans-serif';
  }

  /**
   * Gets the data
   */
  _fetchData() {

    // generate gradient
    const ctx = this.canvas.nativeElement.getContext('2d');

    const gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
    gradientStroke.addColorStop(0, '#fa5c7c');
    gradientStroke.addColorStop(1, '#727cf5');

    this.profileData = {};

    this.profileData.data = {
      // labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Orders',
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          hoverBorderColor: gradientStroke,
          data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
        },
        {
          label: 'Revenue',
          backgroundColor: '#e3eaef',
          borderColor: '#e3eaef',
          hoverBackgroundColor: '#e3eaef',
          hoverBorderColor: '#e3eaef',
          data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
        }
      ]
    };

    this.profileData.opts = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
            color: 'rgba(0,0,0,0.05)'
          },
          stacked: false,
          ticks: {
            stepSize: 20
          }
        }],
        xAxes: [{
          barPercentage: 0.7,
          categoryPercentage: 0.5,
          stacked: false,
          gridLines: {
            color: 'rgba(0,0,0,0.01)'
          }
        }]
      }
    };
  }
}
