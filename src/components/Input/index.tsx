import React from 'react';
import {Input as ChakraInput} from '@chakra-ui/react'

// import { Container } from './styles';

export interface Props {
    size: 'xs' | 'sm' | 'md' | 'lg',
    variant?: 'outline' | 'unstyled' | 'flushed' | 'filled'
    disabled?: boolean
    placeholder?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined

}

export const Input: React.FC<Props> = ({
    size = 'md',
    variant = 'outline',
    ...props
}) => {
  return (
      <ChakraInput size={size} variant={variant}  {...props}/>
  )
}
