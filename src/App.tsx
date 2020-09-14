import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import React, { FC } from 'react'
import Header from './components/Header'
import customTheme from './styles/theme'

const App: FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header />
    </ThemeProvider>
  )
}

export default App
