import { AccordionComponent } from '@accordion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '@custom-material/custom-material.module';
import { EmptyLayoutComponent } from '@empty-layout';
import { Meta, moduleMetadata } from '@storybook/angular';

export default {
  title: 'Accordion',
  decorators: [
    moduleMetadata({
      declarations: [AccordionComponent, EmptyLayoutComponent],
      imports: [BrowserAnimationsModule, MatIconModule, CustomMaterialModule, CdkAccordionModule, HttpClientModule],
    }),
  ],
} as Meta;

export const Default = () => ({
  component: AccordionComponent,
  template: `
    <div style="width: 800px">
      <app-accordion [testAttr]="'items'">
        <div class="accordion-header-content">
          ${header}
        </div>
        <div class="accordion-body-content">
          ${LONG_TEXT}
        </div>
      </app-accordion>
    </div>
  `,
});

const LONG_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
  'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
  'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
  'mollit anim id est laborum.';

const header = `<p>test</p>`;
