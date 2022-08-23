import { Component, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() loadingMessage: string = 'Loading...';

  constructor(private loaderService: LoaderService) {}

  public loading: Observable<boolean> = this.loaderService.isLoading.asObservable().pipe(map((isLoading: boolean) => !isLoading));
}
