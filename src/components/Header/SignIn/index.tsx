import React, { FC } from 'react'
import { Text, PseudoBox } from '@chakra-ui/core'

export const SignIn: FC = () => {
  return (
    <PseudoBox
      p="9px"
      borderRadius="sm"
      _hover={{ border: '1px solid white', padding: '8px' }}
      cursor="pointer"
    >
      <Text fontSize="12px" color="#CCCCCC">
        Hello Guest
      </Text>
      <Text fontSize="14px" fontWeight="bold" color="white">
        Sign In
      </Text>
    </PseudoBox>
  )
}
