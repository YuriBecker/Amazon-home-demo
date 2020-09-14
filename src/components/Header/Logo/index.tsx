import React, { FC } from 'react'
import { Image, Box } from '@chakra-ui/core'
import LogoImg from '../../../assets/images/logo.png'

export const Logo: FC = () => {
  return (
    <Box marginY={{ base: '10px', md: '0px' }}>
      <Image
        src={LogoImg}
        alt="logo"
        objectFit="contain"
        width="150px"
        height="30px"
      />
    </Box>
  )
}
