import {
  Input,
  InputGroup,
  InputRightAddon,
  Icon,
  InputLeftAddon,
  Select
} from '@chakra-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'

const IconContainer = styled(InputRightAddon)`
  background: #febd69;
  &:hover {
    background: #ff9900;
  }
`

const StyledSelect = styled(Select)`
  background: #f3f3f3;
  &:hover {
    background: #c6c5c5;
  }
`

export const Search: FC = () => {
  return (
    <InputGroup size="md" flex="1" px={5} minWidth="350px">
      <InputLeftAddon background="#f3f3f3" p={0}>
        <StyledSelect
          placeholder="All"
          size="sm"
          height="40px"
          width="85px"
          focusBorderColor="#ff9900"
        >
          <option value="option1">Arts & Crafts</option>
          <option value="option2">Automotive</option>
          <option value="option3">Baby</option>
          <option value="option1">Beauty & Personal Care</option>
          <option value="option2">Digital Music</option>
          <option value="option3">{`Men's Fashion`}</option>
          <option value="option1">{`Boys' Fashion`}</option>
          <option value="option2">Health & Household</option>
          <option value="option3">Pet Supplies</option>
          <option value="option1">Toys & Games</option>
          <option value="option1">Video Games</option>
        </StyledSelect>
      </InputLeftAddon>
      <Input
        borderTopLeftRadius="mx"
        borderBottomLeftRadius="md"
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        focusBorderColor="#ff9900"
      />
      <IconContainer cursor="pointer">
        <Icon name="search" size="20px" />
      </IconContainer>
    </InputGroup>
  )
}
