import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms'

import { StarterViewComponent } from "./starterview.component";
import { LoginComponent } from "./login.component";
import { SyslogListComponent } from '../../components/syslog-list/syslog-list.component'
import { OfficeListComponent } from '../../components/office-list/office-list.component'

import { PeityModule } from '../../components/charts/peity';
import { SparklineModule } from '../../components/charts/sparkline';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { OrderByPipe } from '../../pipes/orderBy.pipe';
import { SearchPipe } from '../../pipes/search.pipe';

@NgModule({
  declarations: [
    StarterViewComponent,
    LoginComponent,
    SyslogListComponent,
    OfficeListComponent,
    OrderByPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    SparklineModule,
    FormsModule,
    NgxDatatableModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  exports: [
    StarterViewComponent,
    LoginComponent,
    SyslogListComponent,
    OfficeListComponent
  ],
})

export class AppviewsModule {
}
