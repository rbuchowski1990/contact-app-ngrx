import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact, ContactForm} from '@models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit {

  @Input() contact: ContactForm | Contact;
  @Output() formSubmit = new EventEmitter<ContactForm>();

  constructor() {
  }

  ngOnInit() {
  }

  public submit(form) {
    if (form.valid) {
      this.formSubmit.emit(this.contact);
    }
  }
}
