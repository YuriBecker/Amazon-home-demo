import { Button, Stack, Text } from '@chakra-ui/core'
import React, { FC, useContext } from 'react'
import { AppContext } from '../../../../context'
import priceFormatter from '../../../../utils/priceFormatter'

export const Subtotal: FC = () => {
  const { state: CartProducts } = useContext(AppContext)

  const numOfItems = CartProducts.length

  const totalPrice = CartProducts.reduce(
    (sum, product) => sum + product.price,
    0
  )

  return (
    <Stack
      width="300px"
      flexDirection="column"
      background="white"
      padding="20px"
      marginTop="20px"
      height="fit-content"
    >
      <Text fontSize="18px">
        Subtotal ({numOfItems} items): <b>{priceFormatter(totalPrice)}</b>
      </Text>

      <Button
        as="button"
        backgroundColor="#f0c14b"
        _hover={{ bg: '#ff9900' }}
        border="1px solid"
        borderColor="#a88734"
        padding="0px 5px"
        _focus={{
          border: '1px solid',
          borderColor: '#a88734'
        }}
        _active={{
          border: '1px solid',
          borderColor: '#a88734',
          bg: '#ff9900'
        }}
        size="sm"
      >
        Proceed to checkout
      </Button>
    </Stack>
  )
}
