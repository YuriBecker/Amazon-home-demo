import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import React, { FC } from 'react'
import Header from './components/Header'
import customTheme from './styles/theme'
import { Home } from './components/Home'

const App: FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App
