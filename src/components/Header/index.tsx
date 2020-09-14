import React, { FC } from 'react'
import { Logo } from './Logo'
import { Search } from './Search'
import { SignIn } from './SignIn'
import { Orders } from './Orders'
import { Container } from './Container'
import { Cart } from './Cart'

const Header: FC = () => {
  return (
    <Container>
      <Logo />
      <Search />
      <SignIn />
      <Orders />
      <Cart numItems={15} />
    </Container>
  )
}

export default Header
