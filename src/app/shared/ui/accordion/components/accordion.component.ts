import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent {
  @Input() testAttr: string = '';
  @Input() expanded: boolean = false;
}
