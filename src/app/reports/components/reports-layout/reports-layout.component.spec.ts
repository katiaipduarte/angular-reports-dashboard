import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsService } from 'app/reports/services/reports.service';
import { SharedModule } from 'app/shared/shared.module';
import { of } from 'rxjs';
import { GatewayItem } from './../../models/gateway-item.interface';
import { ProjectItem } from './../../models/project-item.interface';
import { ReportItem } from './../../models/report-item.interface';

import { ReportsLayoutComponent } from './reports-layout.component';

describe('ReportsLayoutComponent', () => {
  let component: ReportsLayoutComponent;
  let fixture: ComponentFixture<ReportsLayoutComponent>;

  const mockReports: ReportItem[] = [
    {
      paymentId: 'test',
      amount: 10,
      projectId: 'test',
      gatewayId: 'test',
      userIds: [],
      modified: 'test',
      created: 'test',
    },
    {
      paymentId: 'test2',
      amount: 450,
      projectId: 'test',
      gatewayId: 'test',
      userIds: [],
      modified: 'test',
      created: 'test',
    },
  ];
  const mockProjects: ProjectItem[] = [
    {
      projectId: '1',
      userIds: [],
      rule: '',
      gatewayIds: [],
      structure: '',
      industry: '',
      website: '',
      description: '',
      image: '',
      name: 'test',
    },
  ];
  const mockGateway: GatewayItem[] = [
    {
      gatewayId: '2',
      userIds: [],
      name: 'test2',
      type: '',
      apiKey: '',
      secondaryApiKey: '',
      description: '',
    },
  ];

  const mockService = jasmine.createSpyObj('ReportsService', ['getReports', 'getProjects', 'getGateways']);
  mockService.getReports.and.returnValue(of(mockReports));
  mockService.getProjects.and.returnValue(of(mockProjects));
  mockService.getGateways.and.returnValue(of(mockGateway));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsLayoutComponent],
      imports: [HttpClientModule, HttpClientTestingModule, SharedModule, BrowserAnimationsModule],
      providers: [{ provide: ReportsService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update projectId in reportFilters', () => {
    expect(component['reportFilters']).toEqual({ from: '2021-01-01', to: '2021-12-31', projectId: '', gatewayId: '' });

    component.updateProjectId('2');

    expect(component['reportFilters']).toEqual({ from: '2021-01-01', to: '2021-12-31', projectId: '2', gatewayId: '' });
  });

  it('should update projectId in reportFilters with empty string if 0', () => {
    expect(component['reportFilters']).toEqual({ from: '2021-01-01', to: '2021-12-31', projectId: '', gatewayId: '' });

    component.updateProjectId('0');

    expect(component['reportFilters']).toEqual({ from: '2021-01-01', to: '2021-12-31', projectId: '', gatewayId: '' });
  });

  it('should update gatewayId in reportFilters', () => {
    expect(component['reportFilters']).toEqual({ from: '2021-01-01', to: '2021-12-31', projectId: '', gatewayId: '' });

    component.updateGatewayId('1');

    expect(component['reportFilters']).toEqual({ from: '2021-01-01', to: '2021-12-31', projectId: '', gatewayId: '1' });
  });

  it('should update gatewayId in reportFilters with empty string if 0', () => {
    expect(component['reportFilters']).toEqual({ from: '2021-01-01', to: '2021-12-31', projectId: '', gatewayId: '' });

    component.updateGatewayId('0');

    expect(component['reportFilters']).toEqual({ from: '2021-01-01', to: '2021-12-31', projectId: '', gatewayId: '' });
  });

  it('should update date range in reportFilters', () => {
    expect(component['reportFilters']).toEqual({ from: '2021-01-01', to: '2021-12-31', projectId: '', gatewayId: '' });
    const range = {
      from: '2021-02-01',
      to: '2021-12-01',
    };
    component.updateDateRange(range);

    expect(component['reportFilters']).toEqual({ from: range.from, to: range.to, projectId: '', gatewayId: '' });
  });

  it('on init component call getReports and getFilters', () => {
    const reportsSpy = spyOn(component, 'getReports').and.callThrough();
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const filtersSpy = spyOn<any>(component, 'getFilters').and.callThrough();
    component.ngOnInit();

    expect(reportsSpy).toHaveBeenCalledTimes(1);
    expect(filtersSpy).toHaveBeenCalledTimes(1);
  });

  it('should populate all the necessary fields to show a report', () => {
    const reportsSpy = spyOn(component, 'getReports').and.callThrough();
    mockService.getReports.and.returnValue(of(mockReports));
    component.ngOnInit();

    expect(component.selectedProjectName).toBe('All projects');
    expect(component.selectedGatewayName).toBe('All gateways');
    expect(reportsSpy).toHaveBeenCalledTimes(1);
  });
});
