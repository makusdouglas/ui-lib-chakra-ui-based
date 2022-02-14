import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {ModalPage} from '../pages/modal.page'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
} from '../../index'
export default {
    title: 'Ui-lib/Overlays/Dialog',
    component: ModalPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
  } as ComponentMeta<typeof ModalPage>;

  export const Default: ComponentStory<typeof ModalPage> = (args) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef<HTMLButtonElement>(null)
    return (
        <>
            <Button colorScheme='red' onClick={() => setIsOpen(true)}>
                Delete Customer
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Delete Customer
                    </AlertDialogHeader>

                    <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='red' onClick={onClose} ml={3}>
                        Delete
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
  }