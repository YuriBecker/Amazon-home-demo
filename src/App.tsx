import React, { FC } from 'react'
import { ThemeProvider, CSSReset, Button } from '@chakra-ui/core'
import customTheme from './styles/theme'

const App: FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Button>Hello</Button>
    </ThemeProvider>
  )
}

export default App
