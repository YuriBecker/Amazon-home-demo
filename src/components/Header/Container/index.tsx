import React, { FC } from 'react'
import { Flex } from '@chakra-ui/core'

export const Container: FC = ({ children }) => {
  return (
    <Flex
      direction="row"
      minH="60px"
      alignItems="center"
      background="#131921"
      position="sticky"
      w="100%"
      top={0}
      zIndex={100}
      px="10px"
      wrap="wrap"
      justify="center"
    >
      {children}
    </Flex>
  )
}
