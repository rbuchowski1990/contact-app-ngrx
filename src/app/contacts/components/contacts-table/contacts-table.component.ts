import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContactState} from '@models/contact-state';
import {Contact} from '@models/contact';
import {DisplayedColumns} from '@config/data-table';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsTableComponent implements OnInit {

  @Input() contactData: ContactState;

  @Output() removeItem = new EventEmitter<Contact>();

  displayedColumns: string[] = DisplayedColumns;

  constructor() {
  }

  ngOnInit() {
  }

}
