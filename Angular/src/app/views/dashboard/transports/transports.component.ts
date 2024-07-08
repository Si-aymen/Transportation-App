import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { echartStyles } from 'src/app/shared/echart-styles';
import { Transports } from 'src/app/shared/models/transports/Transports';
import { TransportsService } from 'src/app/shared/services/transports/transports.service';

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.scss']
})
export class TransportsComponent implements OnInit {
  chartLineOption3: any;
  transports$: Observable<Transports[]>;  
  Buttons: string;
  count$: number;

  constructor(private transportsService: TransportsService) { }

  ngOnInit(): void {
    this.loadTransports();
    this.loadCount();
    this.initializeChart();
  }

  initializeChart(): void {
    this.chartLineOption3 = {
      ...echartStyles.lineNoAxis, ...{
        series: [{
          data: [],
          lineStyle: {
            color: 'rgba(102, 51, 153, .86)',
            width: 3,
            shadowColor: 'rgba(0, 0, 0, .2)',
            shadowOffsetX: -1,
            shadowOffsetY: 8,
            shadowBlur: 10
          },
          label: { show: true, color: '#212121' },
          type: 'line',
          smooth: true,
          itemStyle: {
            borderColor: 'rgba(69, 86, 172, 0.86)'
          }
        }],
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value'
        }
      }
    };
  }

  updateChart(transports: Transports[]): void {
    console.log('Updating chart with transports:', transports); // Log the transports data

    const data = transports.map(transport => transport.price); // Exemple pour utiliser le prix
    const dates = transports.map(transport => new Date(transport.time).toLocaleDateString()); // Utiliser les dates pour l'axe X

    this.chartLineOption3.series[0].data = data;
    this.chartLineOption3.xAxis.data = dates;
  }

  loadTransports(): void {
    this.transportsService.getTransports().subscribe({
      next: (transports: Transports[]) => {
        this.updateChart(transports);
        this.transports$ = new Observable(observer => {
          observer.next(transports);
          observer.complete();
        });
      },
      error: (error) => {
        console.error('There was an error loading transports:', error);
      }
    });
  }

  loadCount(): void {
    this.transportsService.getCount().subscribe({
      next: (data: number) => {
        this.count$ = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}
