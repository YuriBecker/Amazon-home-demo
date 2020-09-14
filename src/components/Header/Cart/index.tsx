import React, { FC } from 'react'
import { Text, PseudoBox, Box, Flex } from '@chakra-ui/core'
import { IoMdCart } from 'react-icons/io'

interface Props {
  numItems: number
}

export const Cart: FC<Props> = ({ numItems }) => {
  return (
    <PseudoBox
      px="9px"
      borderRadius="sm"
      _hover={{ border: '1px solid white', padding: '8px' }}
      display="flex"
      flexDir="row"
      cursor="pointer"
      alignItems="center"
    >
      <Box as={IoMdCart} size="32px" color="white" />
      <Flex direction="column" align="center" justify="center">
        <Text fontSize="12px" color="#ff9900" fontWeight="bold">
          {numItems}
        </Text>
        <Text fontSize="14px" fontWeight="bold" color="white" ml={1}>
          Cart
        </Text>
      </Flex>
      <Flex align="flex-end"></Flex>
    </PseudoBox>
  )
}
