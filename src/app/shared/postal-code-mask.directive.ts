import {Directive, HostListener} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[appPostalCodeMask]'
})
export class PostalCodeDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event, backspace) {
    let newVal = event.replace(/\D/g, '');
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length > 2 && newVal.length < 6) {
      newVal = newVal.replace(/^(\d{0,2})/, '$1-');
    } else if (newVal.length >= 6) {
      newVal = newVal.replace(/^(\d{0,2})/, '$1-').substr(0, 6);
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }

}
