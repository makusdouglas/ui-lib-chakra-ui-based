import React from 'react';
import {Button as ChakraButton, useBreakpointValue} from '@chakra-ui/react'

export interface ButtonProps {
  /**
   * Tamanho do components (default: 'md')
   */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'ghost' | 'outline' | 'link'
  colorScheme?: 'primary' | 'secondary'
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string | undefined
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement

  /**
   * Funções
   */
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
} 


export const Button: React.FC<ButtonProps> = ({
  children, 
  size = 'md',
  variant = 'solid',
  colorScheme,
  isLoading,
  loadingText,
  leftIcon,
  rightIcon,
  ...props
}) => {
  
  return (
  <ChakraButton 
    size={size} 
    variant={variant}
    isLoading={isLoading}
    loadingText={loadingText}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    {...(colorScheme === 'secondary' && {colorScheme})}
    {...props}
  >
    {children}
  </ChakraButton>)
}
