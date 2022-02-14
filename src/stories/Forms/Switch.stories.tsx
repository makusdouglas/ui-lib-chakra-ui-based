import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Stack, Switch} from '../../index'
export default {
    title: 'Ui-lib/Forms/Swith',
    component: Switch
} as ComponentMeta<typeof Switch>

export const Sizes: ComponentStory<typeof Switch> = (args) => {
    return (
        <Stack align='center' direction='row'>
            <Switch size='sm' defaultChecked/>
            <Switch size='md' defaultChecked/>
            <Switch size='lg' defaultChecked/>
        </Stack>
    )
}
export const Colors: ComponentStory<typeof Switch> = (args) => {
    return (
        <Stack align='center' direction='row'>
            <Switch colorScheme='red'  defaultChecked/>
            <Switch colorScheme='blue' defaultChecked/>
            <Switch colorScheme='green' defaultChecked/>
        </Stack>
    )
}