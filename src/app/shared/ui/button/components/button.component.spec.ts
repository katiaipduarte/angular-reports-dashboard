import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CustomMaterialModule } from '@custom-material/custom-material.module';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [CustomMaterialModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate button fields', () => {
    const button = fixture.debugElement.query(By.css('.button')).nativeElement;

    component.btn.textLabel = 'Test Placeholder';
    fixture.detectChanges();
    expect(button.innerText).toEqual('Test Placeholder');
    component.btn.textLabel = 'New Placeholder';
    fixture.detectChanges();
    expect(button.innerText).toEqual('New Placeholder');
  });
});
