import React, { FC } from 'react'
import { Box, Image, Flex } from '@chakra-ui/core'
import { Product } from './Product'
import { allProducts } from '../../data/allProducts'

export const Home: FC = () => {
  return (
    <Box mt="3" mb="6">
      <Flex
        width="100%"
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

        <Flex zIndex={1} mx="1" flexWrap="wrap">
          {allProducts.map(product => (
            <Product product={product} key={product.name} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
