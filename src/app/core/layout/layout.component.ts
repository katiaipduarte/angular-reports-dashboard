import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public loading = false;

  private username: string = '';

  constructor() {}

  public ngOnInit(): void {
    console.log();
  }
}
