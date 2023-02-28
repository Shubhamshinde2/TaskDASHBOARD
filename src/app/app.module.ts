import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashComponent } from './dash/dash.component';

import { ChartModule , LineSeriesService, CategoryService, AccumulationChartModule,
PieSeriesService, ColumnSeriesService} from '@syncfusion/ej2-angular-charts';

import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { BargraphComponent } from './bargraph/bargraph.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavComponent,
    DashComponent,
    BargraphComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    AccumulationChartModule,CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule


  
  ],
  providers: [LineSeriesService, CategoryService, PieSeriesService,ColumnSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
