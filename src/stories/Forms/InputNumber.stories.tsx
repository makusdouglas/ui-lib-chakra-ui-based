
import React, {useState} from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
    NumberInput, 
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '../../index'
import {  } from "@storybook/addons";
export default {
    title: 'Ui-lib/Forms/Input number',
    component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const DefaultTemplate: ComponentStory<typeof NumberInput> = (args) => {
    const [value, setValue] = useState<string | number>()
    return (
        <NumberInput
            value={value}
            onChange={(value) => setValue(value)}
            {...args}
        >
            <NumberInputField/>
            <NumberInputStepper>
                <NumberIncrementStepper/>
                <NumberDecrementStepper/>
            </NumberInputStepper>
        </NumberInput>
    )
}

export const Default = DefaultTemplate.bind({})

export const WithIncrementMouseWheel = DefaultTemplate.bind({})
WithIncrementMouseWheel.args = {
    allowMouseWheel: true
}