import { Flex } from '@chakra-ui/core'
import React, { FC, useContext } from 'react'
import { AppContext } from '../../context'
import { ItemsList } from './ItemsList'
import { NoItems } from './NoItems'

export const Checkout: FC = () => {
  const { state: CartProducts } = useContext(AppContext)

  const noHaveItems = CartProducts.length === 0

  return (
    <Flex justify="center" minHeight="50vh">
      <Flex
        maxW="1500px"
        justify="flex-start"
        direction="row"
        padding="4"
        wrap="wrap"
        w="100%"
      >
        {noHaveItems ? <NoItems /> : <ItemsList />}
      </Flex>
    </Flex>
  )
}
