import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '../index'
export default {
    title: 'Ui-lib/Statistics',
    component: Stat,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
  } as ComponentMeta<typeof Stat>;

  export const Basic: ComponentStory<typeof Stat> = (args) => {
      return (
        <Stat>
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
      )
  }

  export const StatWithIndicator: ComponentStory<typeof Stat> = (args) => {
    return (
        <StatGroup gap={'8'}>
            <Stat>
                <StatLabel>Sent</StatLabel>
                <StatNumber>345,670</StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                23.36%
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Views</StatLabel>
                <StatNumber>523,680</StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                19.46%
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Clicked</StatLabel>
                <StatNumber>45</StatNumber>
                <StatHelpText>
                <StatArrow type='decrease' />
                9.05%
                </StatHelpText>
            </Stat>
        </StatGroup>
    )
}
