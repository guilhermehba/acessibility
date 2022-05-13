
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as uuid from 'uuid';
import { UniqueIdService } from '../../services/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    },
  ],
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() public value: string = '';
  @Input() public label = '';
  public id: any = '';
  @Output() valueChange = new EventEmitter<any>();
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => {};
  public ontouched = () => {};

  constructor(uniqueIdService:UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yesNoButtonGroup')
  }
  ngOnInit(): void {}
  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.ontouched = fn;
  }
  public setDisabledState(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  activate(value: string) {
    this.writeValue(value);
  }
}
enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
