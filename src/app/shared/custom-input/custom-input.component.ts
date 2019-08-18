import { Component, forwardRef, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ar-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() public readonly id: string;
  @Input() public readonly label: string;
  @Input() public readonly type: string;
  @Input() public readonly name: string;
  @Input() public readonly readonly = false;
  @Input() public readonly required = false;
  @Input() public readonly placeholder = 'Введите здесь';
  @Input() public error: string;

  @Output() public focusEvent = new EventEmitter<string>();

  public onChange = (value: string): void => { };
  public onTouch = (): void => { };

  public writeValue(value: string): void { }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public setDisabledState(isDisabled: boolean): void { }

  public onFocus(): void {
    this.focusEvent.emit(this.id);
  }
}
