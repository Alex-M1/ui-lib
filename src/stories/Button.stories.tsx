import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    content: { control: 'Button' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  content: 'Error',
};

// export const Large = Template.bind({});
// Large.args = {
//   content: 'Success',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
