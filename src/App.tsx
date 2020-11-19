import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import React, { FC } from 'react'
import Header from './components/Header'
import customTheme from './styles/theme'
import { Home } from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Error404 } from './pages/Error404'
import { Checkout } from './pages/Checkout'
import 'react-medium-image-zoom/dist/styles.css'
import { AppProvider } from './context'

const App: FC = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
