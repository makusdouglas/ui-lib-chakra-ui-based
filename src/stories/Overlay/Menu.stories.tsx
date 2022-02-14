import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {ModalPage} from '../pages/modal.page'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Button,
} from '../../index'
export default {
    title: 'Ui-lib/Overlays/Menu',
    component: ModalPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
  } as ComponentMeta<typeof ModalPage>;

  export const Default: ComponentStory<typeof ModalPage> = (args) => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
                <MenuDivider/>
                <MenuItem icon={<EditIcon />}>Edit</MenuItem>
                <MenuItem icon={<DeleteIcon />}>Delete</MenuItem>
            </MenuList>
        </Menu>
    )
  }