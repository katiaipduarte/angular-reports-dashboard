import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownItem, DropdownOptions } from '../models';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() options: DropdownOptions = {
    items: [],
    selectedItemId: '0',
    testAttr: '',
  };
  @Output() itemSelected: EventEmitter<string> = new EventEmitter();

  public handleSelected(item: DropdownItem): void {
    this.options.selectedItemId = item.itemId;
    this.itemSelected.emit(item.itemId);
  }
}
