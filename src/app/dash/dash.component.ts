import { Component } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  xAxis: { title: string; valueType: string; };
  yAxix: { title: string; };
  chartTitle: string;
  titletwo:string | undefined ;
  Chart: { name: string; Value: string; text: string; }[];
  bar: {}[];
  
 
 
  ngOnInit(): void {
   
  }

  public data: Object[] = [];
  constructor(){

    // employee ts
    this.chartTitle='Overall Expences'
    this.data=[
      {month: 'jan', sales:'25'},{month: 'Feb', sales:'28'},
      {month: 'Mar', sales:'34'},{month: 'Apr', sales:'32'},
      {month: 'May', sales:'40'},{month: 'June', sales:'32'},
    ];
   this.xAxis ={
    title:'Month',
    valueType: 'Category'
   };
   this.yAxix ={
    title:'sales'
   };

  // pie chart ts

   this.Chart=[
    { name:'Apple', Value: '20' ,text:'20%'},
    { name:'Mango', Value: '20' ,text:'20%'},
    { name:'Gava', Value: '20' ,text:'20%'},
    { name:'Watermelon', Value: '40' ,text:'40%'},
  ];
    this
  this.bar=[
    {employee:16, payment:1600},
    {employee:17, payment:1700},
    {employee:18, payment:1800},
    {employee:19, payment:1900}
    
    
  ];



  }

 

}
