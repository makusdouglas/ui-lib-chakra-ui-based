import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'
import {PinInput, PinInputField, HStack} from '../../index'

export default {
    title: 'Ui-lib/Forms/Input Pin',
    component: PinInput

} as ComponentMeta<typeof PinInput>

const Template: ComponentStory<typeof PinInput> = (args) => {
    return (
        <HStack>
            <PinInput  {...args}>
                <PinInputField/>
                <PinInputField/>
                <PinInputField/>
                <PinInputField/>
            </PinInput>
        </HStack>
    )
}
export const Default = Template.bind({})
Default.args = {
}

export const Masked = Template.bind({})
Masked.args = {
    mask: true
}