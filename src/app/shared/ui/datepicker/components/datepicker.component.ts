import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateRange } from './../models/date-range.interface';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  public minDate: Date = new Date('2021-01-01');
  public maxDate: Date = new Date('2021-12-31');
  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  @Output() dateValueChange: EventEmitter<DateRange> = new EventEmitter<DateRange>();

  public ngOnInit(): void {
    this.range.valueChanges.subscribe((res) => {
      if (res.start && res.end) {
        this.dateValueChange.emit({ from: res.start.toISOString().slice(0, 10), to: res.end.toISOString().slice(0, 10) });
      }
    });
  }
}
