import React, { FC } from 'react'
import { Box, Image, Flex } from '@chakra-ui/core'
import { Product } from './Product'
import { allProducts } from '../../data/allProducts'

export const Home: FC = () => {
  return (
    <Box w="100%" background="#eaeded" mt="10px" mb="25px">
      <Flex
        maxW="1500px"
        justify="center"
        ml="auto"
        mr="auto"
        direction="column"
      >
        <Image
          alt="Home background"
          objectFit="contain"
          width="100%"
          src="https://images-na.ssl-images-amazon.com/images/G/01/videogames/Banner_Digital3._CB1198675309_.jpg"
        />

        <Flex zIndex={1} mx="5px" flexWrap="wrap">
          {allProducts.map(product => (
            <Product product={product} key={product.name} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
