import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {ModalPage} from '../pages/modal.page'
import { LoginForm } from '../assets/components/loginForm';
export default {
    title: 'Ui-lib/Overlays/Modal',
    component: ModalPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
  } as ComponentMeta<typeof ModalPage>;

  const Template: ComponentStory<typeof ModalPage> = (args) => <ModalPage {...args} />;

  export const Basic = Template.bind({})
  Basic.args = {
    title: 'Modal Basic',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil pariatur ad blanditiis. Eaque molestiae cupiditate nulla corporis eius cumque accusantium quisquam, amet quasi, quaerat magni architecto deserunt aliquid exercitationem?'
  }

  export const BasicLogin = Template.bind({})
  BasicLogin.args = {
    title: 'Login',
    children: <LoginForm/>

  }