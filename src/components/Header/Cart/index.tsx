import React, { FC } from 'react'
import { Text, PseudoBox, Box, Flex, Link } from '@chakra-ui/core'
import { IoMdCart } from 'react-icons/io'
import { Link as LinkRouter } from 'react-router-dom'
interface Props {
  numItems: number
}

export const Cart: FC<Props> = ({ numItems }) => {
  return (
    <>
      {/* @ts-ignore */}
      <Link as={LinkRouter} to="/checkout" _focus={{ border: 'none' }}>
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
            {numItems !== 0 && (
              <Text fontSize="12px" color="#ff9900" fontWeight="bold">
                {numItems}
              </Text>
            )}
            <Text fontSize="14px" fontWeight="bold" color="white" ml={1}>
              Cart
            </Text>
          </Flex>
          <Flex align="flex-end"></Flex>
        </PseudoBox>
      </Link>
    </>
  )
}
