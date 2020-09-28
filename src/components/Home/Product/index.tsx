import React, { FC } from 'react'
import {
  Flex,
  Heading,
  Text,
  Stack,
  Stat,
  StatNumber,
  Image,
  PseudoBox
} from '@chakra-ui/core'
import { Product as ProductType } from '../../../interfaces/Product'
import { Stars } from './Stars'

interface Props {
  product: ProductType
}

const Info: FC<Props> = ({
  product: { name, brand, numVotes, stars, price }
}) => (
  <Stack spacing="5px">
    <Heading size="md">{name}</Heading>
    <Text fontSize="sm">By {brand}</Text>
    <Stat>
      <StatNumber fontSize="md">${price}</StatNumber>
    </Stat>
    <Flex>
      <Stars num={stars} />
      <Text ml="0.5rem" fontSize="12px" color="#767676">
        {numVotes}
      </Text>
    </Flex>
  </Stack>
)

export const Product: FC<Props> = ({ product, product: { imageUrl } }) => {
  return (
    <Flex
      direction="column"
      justify="space-around"
      align="center"
      backgroundColor="white"
      flex={1}
      zIndex={1}
      m="10px"
      p="20px"
      minW="400px"
    >
      <Info product={product} />
      <Image src={imageUrl} objectFit="contain" maxHeight="200px" mt="15px" />
      <PseudoBox
        as="button"
        backgroundColor="#f0c14b"
        border="1px solid"
        mt="10px"
        borderColor="#a88734 #9c7e31 #846a29"
        color="#111"
        padding="0px 5px"
        width="100px"
        _hover={{ bg: '#ff9900' }}
      >
        Add to Cart
      </PseudoBox>
    </Flex>
  )
}
