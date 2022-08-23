import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../models/button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() btn: Button = {
    textLabel: 'Default',
    ariaLabel: '',
    testAttr: '',
  };

  @Output() btnClicked: EventEmitter<void> = new EventEmitter();

  public clickBtn(): void {
    this.btnClicked.emit();
  }
}
