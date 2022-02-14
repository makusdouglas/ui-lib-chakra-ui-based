import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Heading, Stack} from '../../index'
export default {
    title: 'Ui-lib/Typography/Heading',
    component: Heading,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
  } as ComponentMeta<typeof Heading>;

  export const HeadingSizes: ComponentStory<typeof Heading> = (args) => {
      return (
        <Stack spacing={6}>
            <Heading as='h1' size='4xl' isTruncated>
            (4xl) Zscan Software LTDA ® 2022
            </Heading>
            <Heading as='h2' size='3xl' isTruncated>
            (3xl) Zscan Software LTDA ® 2022
            </Heading>
            <Heading as='h2' size='2xl'>
            (2xl) Zscan Software LTDA ® 2022
            </Heading>
            <Heading as='h2' size='xl'>
            (xl) Zscan Software LTDA ® 2022
            </Heading>
            <Heading as='h3' size='lg'>
            (lg) Zscan Software LTDA ® 2022
            </Heading>
            <Heading as='h4' size='md'>
            (md) Zscan Software LTDA ® 2022
            </Heading>
            <Heading as='h5' size='sm'>
            (sm) Zscan Software LTDA ® 2022
            </Heading>
            <Heading as='h6' size='xs'>
            (xs) Zscan Software LTDA ® 2022
            </Heading>
      </Stack>
      )
  }