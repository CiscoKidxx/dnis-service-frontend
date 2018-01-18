import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from "@angular/router";
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ROUTES } from "./app.routes";
import { AppComponent } from './app.component';


// App views
import { DashboardsModule } from "./views/dashboards/dashboards.module";
import { AppviewsModule } from "./views/appviews/appviews.module";

// App modules/components
import { LayoutsModule } from "./components/common/layouts/layouts.module";

// App services
import { DataService } from './services/data.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardsModule,
    LayoutsModule,
    AppviewsModule,
    NgxDatatableModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
