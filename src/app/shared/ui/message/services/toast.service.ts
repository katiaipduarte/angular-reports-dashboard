import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MessageData, MessageType } from '..';
import { ToastComponent } from '../components';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private snackBarConfig: MatSnackBarConfig = {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'right',
  };

  constructor(private snackBar: MatSnackBar) {}

  public openSnackBar(data: MessageData): void {
    const _type: MessageType = data.type !== undefined ? data.type : MessageType.Info;

    this.snackBar.openFromComponent(ToastComponent, {
      ...this.snackBarConfig,
      data: { title: data.title, message: data.message, type: _type },
    });
  }

  public dismissSnackBar(): void {
    this.snackBar.dismiss();
  }
}
