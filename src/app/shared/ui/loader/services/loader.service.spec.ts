import { TestBed } from '@angular/core/testing';
import { LoaderConsumer } from '../mocks/loader-consumer.mock';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;
  let consumer1: LoaderConsumer;
  let consumer2: LoaderConsumer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
    consumer1 = new LoaderConsumer(service);
    consumer2 = new LoaderConsumer(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialise isLoading to false', () => {
    service.isLoading.subscribe((value: boolean) => {
      expect(value).toBe(false);
    });
  });

  it('should broadcast isLoading to all consumers', () => {
    expect(consumer1.isBusy).toBe(false);
    expect(consumer2.isBusy).toBe(false);
  });

  it('should broadcast isLoading to all consumers when the value changes', () => {
    service.isLoading.next(true);

    expect(consumer1.isBusy).toBe(true);
    expect(consumer2.isBusy).toBe(true);
  });
});
