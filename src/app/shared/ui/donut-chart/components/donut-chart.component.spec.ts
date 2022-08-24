import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonutChartComponent } from './donut-chart.component';

fdescribe('DonutChartComponent', () => {
  let component: DonutChartComponent;
  let fixture: ComponentFixture<DonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonutChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('drawChart()', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(DonutChartComponent);
      component = fixture.componentInstance;
      component.chartData = {
        color: ['#A259FF', '#F24E1E', '#FFC107', '#6497B1'],
        series: [
          {
            name: 'test1',
            value: 8,
          },
          {
            name: 'test2',
            value: 15,
          },
          {
            name: 'test3',
            value: 12,
          },
        ],
      };

      fixture.detectChanges();
    });

    it('should call drawChart() function', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const spyFunction = spyOn<any>(component, 'drawChart');
      //directly call ngOnChanges
      component.ngOnChanges({
        chartData: new SimpleChange(null, component.chartData, true),
      });
      fixture.detectChanges();
      expect(spyFunction.calls.any()).toBeTruthy();
    });
  });
});
