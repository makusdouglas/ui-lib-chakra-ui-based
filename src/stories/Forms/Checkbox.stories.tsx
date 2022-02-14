import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Checkbox} from '../../index';
export default {
    title: 'Ui-lib/Forms/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args}/>

export const Default = Template.bind({})
Default.args = {
    children: 'Checkbox',
    defaultChecked: true
}

export const Small = Template.bind({})
Small.args = {
    children: 'Small Checkbox',
    defaultChecked: true,
    size: 'sm'
}
export const Medium = Template.bind({})
Medium.args = {
    children: 'Small Checkbox',
    defaultChecked: true,
    size: 'md'
}
export const Large = Template.bind({})
Large.args = {
    children: 'Small Checkbox',
    defaultChecked: true,
    size: 'lg'
}