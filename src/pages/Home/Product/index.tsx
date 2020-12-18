import React, { FC, useContext } from 'react'
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
import Zoom from 'react-medium-image-zoom'
import { IMAGE_FALLBACK_URL } from '../../../constants'
import { AppContext } from '../../../context'
import { Types } from '../../../reducers'
import priceFormatter from '../../../utils/priceFormatter'
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
      <StatNumber fontSize="md">{priceFormatter(price)}</StatNumber>
    </Stat>
    <Flex>
      <Stars num={stars} />
      <Text ml="0.5rem" fontSize="12px" color="#767676">
        {numVotes}
      </Text>
    </Flex>
  </Stack>
)

export const Product: FC<Props> = ({ product }) => {
  const { dispatch } = useContext(AppContext)
  const { imageUrl } = product

  return (
    <Flex
      direction="column"
      justify="space-around"
      align="center"
      backgroundColor="white"
      flex={1}
      zIndex={1}
      m="3"
      p="5"
      minW={{ base: '300px', sm: '400px' }}
    >
      <Info product={product} />
      <Zoom>
        <Image
          src={imageUrl}
          objectFit="contain"
          maxHeight="200px"
          mt="15px"
          fallbackSrc={IMAGE_FALLBACK_URL}
        />
      </Zoom>
      <PseudoBox
        as="button"
        backgroundColor="#f0c14b"
        border="1px solid"
        mt="10px"
        borderColor="#a88734"
        color="black"
        padding="0px 5px"
        width="100px"
        _hover={{ bg: '#ff9900' }}
        onClick={(): void => {
          dispatch({
            type: Types.Add,
            payload: product
          })
        }}
      >
        Add to Cart
      </PseudoBox>
    </Flex>
  )
}
