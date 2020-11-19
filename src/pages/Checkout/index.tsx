import React, { FC } from 'react'
import { Button, Flex, Heading, Image } from '@chakra-ui/core'
import { Link as LinkRouter } from 'react-router-dom'

export const Checkout: FC = () => {
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
        <Flex w="100%" justify="center" flexDirection="column" align="center">
          <Heading fontSize="28px">Your Amazon Cart is Empty</Heading>
          <Image
            alt="No itemt"
            objectFit="contain"
            src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
            maxWidth="400px"
          />
          <Button
            as="button"
            backgroundColor="#f0c14b"
            _hover={{ bg: '#ff9900' }}
            border="1px solid"
            mt="5"
            borderColor="#a88734 #9c7e31 #846a29"
            padding="0px 5px"
            _focus={{
              border: '1px solid',
              borderColor: '#a88734 #9c7e31 #846a29'
            }}
            _active={{
              border: '1px solid',
              borderColor: '#a88734 #9c7e31 #846a29',
              bg: '#ff9900'
            }}
          >
            <LinkRouter to="/">Return to Home</LinkRouter>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
