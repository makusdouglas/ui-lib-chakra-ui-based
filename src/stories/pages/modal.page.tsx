import React from 'react';
import {
    Button, 
    useDisclosure, 
    Modal,
    ModalHeader,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    ModalCloseButton,
    Stack
} from '../../index';
export type ModalPageProps = {
    title: string
}
export const ModalPage: React.FC<ModalPageProps> = ({title, children}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
  return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Stack direction='row'>
                        <Button>Confirm</Button>
                        <Button variant='ghost' onClick={onClose}>close</Button>
                    </Stack>
                </ModalFooter>
            </ModalContent>
        </Modal>
      </>
  )
}