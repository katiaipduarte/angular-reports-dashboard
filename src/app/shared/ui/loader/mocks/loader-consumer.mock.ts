import { LoaderService } from '../services/loader.service';

export class LoaderConsumer {
  isBusy = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((value: boolean) => {
      this.isBusy = value;
    });
  }
}
