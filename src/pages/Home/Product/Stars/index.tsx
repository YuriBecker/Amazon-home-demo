import React, { FC } from 'react'
import { Product } from '../../../../interfaces/Product'
import { Icon } from '@chakra-ui/core'

interface Props {
  num: Product['stars']
}

export const Stars: FC<Props> = ({ num }) => {
  const completeStars = []

  for (let index = 0; index < num; index++) {
    completeStars.push(<Icon name="star" color="#ECC94B" />)
  }

  if (num < 5)
    while (completeStars.length !== 5) {
      completeStars.push(<Icon name="star" color="#d4cfcf" />)
    }

  return (
    <>
      {completeStars.map((star, i) => (
        <React.Fragment key={i}>{star}</React.Fragment>
      ))}
    </>
  )
}
