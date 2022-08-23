import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/user.interface';
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
    this.authService.getCurrentUser().subscribe((res: User) => {
      if (res.data.length > 0) {
        this.username = `${res.data[0].firstName} ${res.data[0].lastName}`;
      }
    });
  }
}
