import { Component, forwardRef, inject, Injector, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

//TODO: Add disabled state
//TODO: Add unit testing
@Component({
  selector: 'rm-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RmInput),
    multi: true,
  }],
  host: {
    '(focusin)': 'onFocusIn()',
    '(focusout)': 'onFocusOut()',
  },
})
export class RmInput implements ControlValueAccessor, OnInit {
  public active = false;
  public labelUp =  false;
  private _value = '';
  private ngControl: NgControl | undefined = undefined;
  private injector = inject(Injector);

  public ngOnInit(): void {
    try {
      this.ngControl = this.injector.get(NgControl);
    } catch (e) {
      if ((e as Error)?.name !== 'NullInjectorError') throw e;
      this.ngControl = undefined;
    }
  }

  public get value() {
    return this._value;
  }
  public set value(newValue) {
    this._value = newValue;
    this.labelUp = this.active || this._value.length > 0;
  };

  public get hasError(): boolean {
    if (this.ngControl) {
      const { touched, dirty, invalid } = this.ngControl;
      console.log('touced, dirty, invalid:', { touched, dirty, invalid})
      return (invalid && touched && dirty) || false;
    }
    return false;
  }

  public label = input<string>('');
  public errorMessage = input<string>('');

  private onChange: (value: string) => void = () => {
    console.warn('missing onchange function');
  }; 

  private onTouhed: () => void = () => {
    console.warn('missing onchange function');
  }; 

  onFocusIn() {
    this.active = true;
    this.labelUp = true;
  }

  onFocusOut() {
    this.active = false;
    this.labelUp = this.value.length > 0
    this.onTouhed();
  }

  writeValue(newValue: string): void {
    this.value = newValue;
  }

  registerOnChange(fn: () => void): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
      this.onTouhed = fn;
  }

  change(value: string) {
    this.onChange(value);
  }

}
