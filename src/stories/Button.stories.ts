import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '@button';
import { CustomMaterialModule } from '@custom-material/custom-material.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    btn: {
      textLabel: {
        control: 'text',
        defaultValue: 'Default',
      },
      ariaLabel: {
        control: 'text',
        defaultValue: '',
      },
    },
  },
  decorators: [
    (storyFunc) => {
      const story = storyFunc();

      return {
        ...story,
        template: `${story.template}`,
      };
    },
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [HttpClientModule, CustomMaterialModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: `<app-button [btn]="btn" [disabled]="disabled"></app-button>`,
});

export const Default = Template.bind({});
Default.args = {
  btn: {
    textLabel: 'Default',
    ariaLabel: 'Default',
    testAttr: 'Default',
  },
};
