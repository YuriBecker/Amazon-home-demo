import React, { FC, useContext } from 'react'
import { Logo } from './Logo'
import { Search } from './Search'
import { SignIn } from './SignIn'
import { Orders } from './Orders'
import { Container } from './Container'
import { Cart } from './Cart'
import { AppContext } from '../../context'

const Header: FC = () => {
  const { state: CartProducts } = useContext(AppContext)

  const numOfItems = CartProducts.length

  return (
    <Container>
      <Logo />
      <Search />
      <SignIn />
      <Orders />
      <Cart numItems={numOfItems} />
    </Container>
  )
}

export default Header
