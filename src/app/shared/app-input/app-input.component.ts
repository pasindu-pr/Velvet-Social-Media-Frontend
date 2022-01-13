import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
})
export class AppInputComponent implements OnInit, ControlValueAccessor {
  @Input() inputType: string = 'text';
  @Input() icon: IconDefinition = null as any;
  @Input() usedComponent: string = '';
  @Input() placeholder: string = '';

  @Input() disabled: boolean;
  value: any = '';

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  onChange: any = (e: EventTarget) => {
    console.log(e);
  };

  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}
}
