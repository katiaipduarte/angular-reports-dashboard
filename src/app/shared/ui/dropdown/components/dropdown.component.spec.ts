import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MatSelectHarness } from '@angular/material/select/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '@custom-material/custom-material.module';
import { DropdownOptions } from '../models';
import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let loader: HarnessLoader;

  const options: DropdownOptions = {
    testAttr: 'test',
    items: [
      { itemText: 'Item1_ABC', itemId: '1' },
      { itemText: 'Item2_ADD', itemId: '2' },
    ],
    selectedItemId: '1',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      imports: [CustomMaterialModule, MatIconTestingModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);

    component = fixture.componentInstance;
    component.options = options;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should intialise the options and single select according to inputs components', async () => {
    const select_dropdown = await loader.getHarness(MatSelectHarness);
    const select_state = await select_dropdown.isMultiple();
    expect(select_state).toBeFalse();
    await select_dropdown.open();
    const select_options = await select_dropdown.getOptions();
    expect(select_options.length).toEqual(component.options.items.length);
  });

  it('should select the clicked option', async () => {
    const select_dropdown = await loader.getHarness(MatSelectHarness);
    await select_dropdown.open();

    const select_options = await select_dropdown.getOptions();
    await select_options[0].click();

    const selected_item = await select_options[0].getText();
    expect(selected_item).toBe(component.options.items[0].itemText);

    const selected_option = await select_options[0].isSelected();
    expect(selected_option).toBeTrue();

    const unselected_option_state = await select_options[1].isSelected();
    expect(unselected_option_state).toBeFalse();
  });
});
