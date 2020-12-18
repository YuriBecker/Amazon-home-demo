import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/core'
import React, { FC, useContext } from 'react'
import { AppContext } from '../../../../context'
import { Types } from '../../../../reducers'

export const List: FC = () => {
  const { dispatch, state: CartProducts } = useContext(AppContext)

  const uniqCartProducts = Array.from(new Set(CartProducts))

  return (
    <Flex
      flex={1}
      flexDirection="column"
      wrap="wrap"
      margin="20px"
      background="white"
      padding="20px"
    >
      <Heading as="h1" fontSize="28px">
        Shopping Cart
      </Heading>
      <Link
        as="button"
        onClick={(): void => dispatch({ type: Types.DeleteAll })}
        color="#007185"
        textAlign="left"
      >
        Remove all items
      </Link>

      {uniqCartProducts.map(product => {
        const quantity = CartProducts.filter(item => item.id === product.id)
          .length

        return (
          <>
            <Divider />
            <Flex
              key={product.id}
              flexDirection={{ base: 'column', xl: 'row' }}
              margin="12px"
              gridGap="2rem"
            >
              <Image
                alt="No itemt"
                objectFit="contain"
                src={product.imageUrl}
                width="180px"
                height="180px"
              />
              <Stack>
                <Text fontSize="18px" color="#007185">
                  {product.name}
                </Text>
                <Text fontSize="14px" color="black">
                  {` by ${product.brand}`}
                </Text>
                <Text fontSize="13px" color="#007185">
                  Quantity: <b>{quantity}</b>
                </Text>

                <Button
                  leftIcon="delete"
                  variantColor="red"
                  variant="solid"
                  size="xs"
                  width="fit-content"
                  marginTop="10px"
                  onClick={(): void =>
                    dispatch({ type: Types.Delete, payload: product.id })
                  }
                >
                  Remove
                </Button>
              </Stack>
            </Flex>
          </>
        )
      })}
    </Flex>
  )
}
