import React, { FC } from 'react'
import { Image, Flex } from '@chakra-ui/core'
import { Product } from './Product'
import { allProducts } from '../../data/allProducts'

export const Home: FC = () => {
  return (
    <Flex width="100%" justify="center">
      <Flex maxW="1500px" justify="center" direction="column" mt="4" mb="6">
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
    </Flex>
  )
}
