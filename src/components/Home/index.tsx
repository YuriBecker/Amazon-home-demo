import React, { FC } from 'react'
import { Box, Image, Flex } from '@chakra-ui/core'

export const Home: FC = () => {
  return (
    <Flex w="100%" height="100%" justify="center" background="#eaeded">
      <Box maxW="1500px">
        <Image
          alt="Home background"
          objectFit="contain"
          width="100%"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          zIndex={-1}
        />
      </Box>
    </Flex>
  )
}
