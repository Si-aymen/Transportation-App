import { Component, OnInit } from '@angular/core';
import { echartStyles } from 'src/app/shared/echart-styles';
import { TransportsService } from 'src/app/shared/services/transports/transports.service';


@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.scss']
})
export class TransportsComponent implements OnInit {
  chartLineOption3: any;
  transports: any ; 
  Buttons:string;
  count:any ;

  constructor(
		private transportsService:TransportsService
	) { }


  ngOnInit() {

    this.count = this.transportsService.getCount();


    this.chartLineOption3 = {
      ...echartStyles.lineNoAxis, ...{
        series: [{
          data: [40, 80, 20, 90, 30, 80, 40],
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
        }]
      }
    };
    this.chartLineOption3.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    this.transports= this.transportsService.getTransports();

  }



  view(row: any): void {
    console.log('View', row);
    // Ajoutez ici votre logique pour la vue
  }

  // Exemple de méthode pour l'édition
  edit(row: any): void {
    console.log('Edit', row);
    // Ajoutez ici votre logique pour l'édition
  }

  // Exemple de méthode pour la suppression
  delete(row: any): void {
    console.log('Delete', row);
    // Ajoutez ici votre logique pour la suppression
  }


}


