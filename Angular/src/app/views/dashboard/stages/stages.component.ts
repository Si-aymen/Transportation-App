import { Component } from '@angular/core';
import { EChartOption } from 'echarts';


@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export class StagesComponent {

  salesChartBar: EChartOption;
  salesChartPie: EChartOption;

  constructor() { }

  ngOnInit() {

    this.salesChartPie = {
      color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
      tooltip: {
          show: true,
          backgroundColor: 'rgba(0, 0, 0, .8)'
      },

      xAxis: [{
              axisLine: {
                  show: false
              },
              splitLine: {
                  show: false
              }
          }

      ],
      yAxis: [{
              axisLine: {
                  show: false
              },
              splitLine: {
                  show: false
              }
          }
      ],
      series: [{
              name: 'Sales by Country',
              type: 'pie',
              radius: '75%',
              center: ['50%', '50%'],
              data: [
                  { value: 535, name: 'USA' },
                  { value: 310, name: 'Brazil' },
                  { value: 234, name: 'France' },
                  { value: 155, name: 'Germany' },
                  { value: 130, name: 'UK' },
                  { value: 348, name: 'India' }
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  };






  }

}
