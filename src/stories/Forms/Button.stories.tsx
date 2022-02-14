import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ChatIcon} from '@chakra-ui/icons'

import { Button, ButtonProps } from '../../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Ui-lib/Forms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {} as ButtonProps,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  colorScheme: 'secondary',

};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  isLoading: true,
  loadingText: 'Loading',

};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  children: 'Chat',
  leftIcon: <ChatIcon/>
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  children: 'Chat',
  rightIcon: <ChatIcon/>
};


export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  size: 'sm'
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Button',
  size: 'md'
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: 'lg'
};