import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MessageData } from '../../models/message-data.interface';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: MessageData, private toastService: ToastService) {}

  public close(): void {
    this.toastService.dismissSnackBar();
  }
}
