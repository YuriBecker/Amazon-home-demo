import { Flex } from '@chakra-ui/core'
import React, { FC } from 'react'
import { List } from './List'
import { Subtotal } from './Subtotal'

export const ItemsList: FC = () => {
  return (
    <Flex w="100%" flexDirection={{ base: 'column', lg: 'row' }} wrap="wrap">
      <List />
      <Subtotal />
    </Flex>
  )
}
