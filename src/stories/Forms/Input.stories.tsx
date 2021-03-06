import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {Input, } from '../../index'

export default {
    title: 'Ui-lib/Forms/Input text',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
    placeholder: 'Input',
    variant: 'outline',
    disabled: false,
    colorScheme: 'red'
}

export const Flushed = Template.bind({});
Flushed.args = {
    placeholder: 'Input',
    variant: 'flushed',
    disabled: false,
    colorScheme: 'red'
}

export const Filled = Template.bind({});
Filled.args = {
    placeholder: 'Input',
    variant: 'filled',
    disabled: false,
    colorScheme: 'red'
}