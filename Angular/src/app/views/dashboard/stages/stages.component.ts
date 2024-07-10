import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stages } from 'src/app/shared/models/stages/stages';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { StagesService } from 'src/app/shared/services/stages/stages.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export class StagesComponent implements OnInit {

  domainChartPie: EChartOption;
  typeChartPie: EChartOption;
  locationChartPie: EChartOption;
  stages$: Observable<Stages[]>;

  constructor(
    private dl: DataLayerService,
    private stageService: StagesService
  ) { }

  ngOnInit() {
    this.loadStages();
  }

  loadStages(): void {
    this.stageService.getStages().subscribe({
      next: (stages: Stages[]) => {
        this.stages$ = of(stages);
        this.generateDataAndChart_location(stages);
        this.generateDataAndChart_type(stages);

      },
      error: (error) => {
        console.error('There was an error loading internships:', error);
      }
    });
  }

  generateDataAndChart_location(stages: Stages[]): void {
    const nameCounts = stages.reduce((acc, stage) => {
      acc[stage.location] = (acc[stage.location] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const chartData = Object.entries(nameCounts).map(([name, value]) => ({ name, value }));

    this.Chart1(chartData);
  }


  generateDataAndChart_doamin(stages: Stages[]): void {
    const nameCounts = stages.reduce((acc, stage) => {
      acc[stage.domain] = (acc[stage.domain] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const chartData = Object.entries(nameCounts).map(([name, value]) => ({ name, value }));

    this.Chart3(chartData);
  }
  generateDataAndChart_type(stages: Stages[]): void {
    const nameCounts = stages.reduce((acc, stage) => {
      acc[stage.type] = (acc[stage.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const chartData = Object.entries(nameCounts).map(([name, value]) => ({ name, value }));

    this.Chart2(chartData);
  }

  Chart1(data: { name: string, value: number }[]): void {
    this.locationChartPie = {
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
      }],
      yAxis: [{
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }],
      series: [{
        name: 'location of inernship',
        type: 'pie',
        radius: '75%',
        center: ['50%', '50%'],
        data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  }

  Chart2(data: { name: string, value: number }[]): void {
    this.typeChartPie = {
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
      }],
      yAxis: [{
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }],
      series: [{
        name: 'Type of inernship',
        type: 'pie',
        radius: '75%',
        center: ['50%', '50%'],
        data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  }

  Chart3(data: { name: string, value: number }[]): void {
    this.domainChartPie = {
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
      }],
      yAxis: [{
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }],
      series: [{
        name: 'Domain of inernship',
        type: 'pie',
        radius: '75%',
        center: ['50%', '50%'],
        data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  }


}
