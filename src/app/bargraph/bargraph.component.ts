import { Component } from '@angular/core';

@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.css']
})
export class BargraphComponent {
  public data: object[] = [];
  public chartTitle: string;
  public xAxis:object;
  public yAxis:object;
  constructor(){
    this.chartTitle='Rank';
    this.xAxis={
      title:'Countries',
      valueType:'Category'

    };
    this.yAxis={
      title:"index"

    };
    this.data =[
      {name:"India" , value:50},
      {name:"USA" , value:10},
      {name:"PAK" , value:20},
      {name:"UK" , value:50},
      {name:"France" , value:25}
    ];
  }
  

  

}
