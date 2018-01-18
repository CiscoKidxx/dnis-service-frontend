import { Component, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IOffice } from './office';
import { Observable } from 'rxjs/Observable';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';


@Component({
  selector: 'seerc-offices',
  templateUrl: './office-list.component.html'
})

export class OfficeListComponent {

  constructor(private _dataService: DataService, public modal: Modal) {
  }

  pageTitle: string = 'Office List:';
  offices: IOffice[] = [];
  errorMessage: string;

  onClick() {
    const dialogRef = this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
      .open();

    dialogRef.result
      .then(result => alert(`The result is: ${result}`));
  }

  ngOnInit(): void {
    this._dataService.getOfficeData()
      .subscribe(
      offices => this.offices = offices,
      error => this.errorMessage = <any>error
      );
  }

}
