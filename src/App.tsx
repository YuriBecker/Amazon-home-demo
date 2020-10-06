import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import React, { FC } from 'react'
import Header from './components/Header'
import customTheme from './styles/theme'
import { Home } from './Pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Error404 } from './Pages/Error404'

const App: FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
