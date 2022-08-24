import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '@custom-material/custom-material.module';
import { MessageType } from '../../enums/message-type.enum';
import { ToastService } from '../../services/toast.service';
import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent],
      imports: [CustomMaterialModule, NoopAnimationsModule, MatIconTestingModule],
      providers: [
        ToastService,
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: {
            title: 'title',
            message: 'message',
            type: MessageType.Success,
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
