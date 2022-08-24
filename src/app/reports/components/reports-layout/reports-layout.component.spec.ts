import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';

import { ReportsLayoutComponent } from './reports-layout.component';

describe('ReportsLayoutComponent', () => {
  let component: ReportsLayoutComponent;
  let fixture: ComponentFixture<ReportsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsLayoutComponent],
      imports: [HttpClientModule, HttpClientTestingModule, SharedModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
