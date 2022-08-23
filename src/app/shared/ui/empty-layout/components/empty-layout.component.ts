import { Component, Input } from '@angular/core';
import { EmptyMessage } from '../models/empty-message.interface';

@Component({
  selector: 'app-empty-layout',
  templateUrl: './empty-layout.component.html',
  styleUrls: ['./empty-layout.component.scss'],
})
export class EmptyLayoutComponent {
  @Input() message: EmptyMessage = {
    title: '',
    content: '',
    img: '',
  };
}
