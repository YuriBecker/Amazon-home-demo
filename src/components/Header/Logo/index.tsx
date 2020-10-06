import React, { FC } from 'react'
import { Image, Box, Link } from '@chakra-ui/core'
import LogoImg from '../../../assets/images/logo.png'
import { Link as LinkRouter } from 'react-router-dom'
export const Logo: FC = () => {
  return (
    <Box marginY={{ base: '10px', md: '0px' }}>
      {/* @ts-ignore */}
      <Link as={LinkRouter} to="/" _focus={{ border: 'none' }}>
        <Image
          src={LogoImg}
          alt="logo"
          objectFit="contain"
          width="150px"
          height="30px"
        />
      </Link>
    </Box>
  )
}
