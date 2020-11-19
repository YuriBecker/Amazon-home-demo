import React, { FC } from 'react'
import { Box, Flex, Image, Link } from '@chakra-ui/core'

export const Error404: FC = () => {
  return (
    <Box h="100vh" background="white" p="5">
      <Flex
        maxW="1500px"
        justify="center"
        ml="auto"
        mr="auto"
        direction="column"
      >
        <Link href="/" display="flex" justifyContent="center">
          <Image
            alt="Message Text"
            objectFit="contain"
            m="30px"
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png"
          />
        </Link>

        <Link
          href="https://www.amazon.com/dogsofamazon"
          isExternal
          display="flex"
          justifyContent="center"
        >
          <Image
            alt="Dog"
            objectFit="contain"
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/82._TTD_.jpg"
          />
        </Link>
      </Flex>
    </Box>
  )
}
