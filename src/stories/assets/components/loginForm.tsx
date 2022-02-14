import React, { useState } from 'react';
import {Stack, Input, FormControl, FormLabel, useEditable, FormHelperText} from '../../../index'
export const LoginForm: React.FC = () => {
    const [email, setEmail ] = useState<string>('')
    const [password, setPassword ] = useState<string>('')

  return (
    <Stack>
        <FormControl>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input 
                id='email' 
                type='email' 
                placeholder='your email address'
                variant='filled'
                value={email}
                onChange={e => setEmail(e.target.value)} 
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input 
                id='password' 
                type='password' 
                placeholder='your secret pass'
                variant='filled'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <FormHelperText>Never share your password.</FormHelperText>
        </FormControl>
    </Stack>
    )
}