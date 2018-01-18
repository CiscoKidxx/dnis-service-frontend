import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IOffice } from './office';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'seerc-offices',
  templateUrl: './office-list.component.html'
})

export class OfficeListComponent {

  constructor(private _dataService: DataService) {
  }

  pageTitle: string = 'Office List:';
  offices: IOffice[] = [];
  errorMessage: string;

  ngOnInit(): void {
    this._dataService.getOfficeData()
      .subscribe(
      offices => this.offices = offices,
      error => this.errorMessage = <any>error
      );
  }

}
