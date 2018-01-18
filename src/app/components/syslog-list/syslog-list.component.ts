import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ISyslog } from './syslog';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'seerc-syslog-list',
  templateUrl: './syslog-list.component.html'
})

export class SyslogListComponent {

  constructor(private _dataService: DataService) {
  }

  pageTitle: string = 'Syslog List:';
  syslogs: ISyslog[] = [];
  errorMessage: string;

  ngOnInit(): void {

  }

}
