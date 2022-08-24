import { Component, OnInit } from '@angular/core';
import { UserItem } from '@core/models/user-item.interface';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AuthService } from './../services/auth/auth.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public username: string = '';

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.getCurrentUser();
  }

  private getCurrentUser(): void {
    this.authService.getCurrentUser().subscribe((res: UserItem[]) => {
      if (res.length > 0) {
        this.username = `${res[0].firstName} ${res[0].lastName}`;
      }
    });
  }
}
