import {
  AspectRatioBox,
  Button,
  CSSReset,
  Image,
  ThemeProvider
} from '@chakra-ui/core'
import React, { FC } from 'react'
import customTheme from './styles/theme'

const App: FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Button>Hello</Button>
      <AspectRatioBox w={{ base: 1 / 2, xl: '100%' }} ratio={21 / 9}>
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatioBox>
    </ThemeProvider>
  )
}

export default App
