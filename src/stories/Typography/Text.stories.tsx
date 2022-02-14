import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text, Stack} from '../../index'
export default {
    title: 'Ui-lib/Typography/Text',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
  } as ComponentMeta<typeof Text>;

  export const TextSizes: ComponentStory<typeof Text> = (args) => {
      return (
        <Stack spacing={3}>
        <Text fontSize='6xl'>(6xl) Zscan Software LTDA ® 2022</Text>
        <Text fontSize='5xl'>(5xl) Zscan Software LTDA ® 2022</Text>
        <Text fontSize='4xl'>(4xl) Zscan Software LTDA ® 2022</Text>
        <Text fontSize='3xl'>(3xl) Zscan Software LTDA ® 2022</Text>
        <Text fontSize='2xl'>(2xl) Zscan Software LTDA ® 2022</Text>
        <Text fontSize='xl'>(xl) Zscan Software LTDA ® 2022</Text>
        <Text fontSize='lg'>(lg) Zscan Software LTDA ® 2022</Text>
        <Text fontSize='md'>(md) Zscan Software LTDA ® 2022</Text>
        <Text fontSize='sm'>(sm) Zscan Software LTDA ® 2022</Text>
        <Text fontSize='xs'>(xs) Zscan Software LTDA ® 2022</Text>
      </Stack>
      )
  }
