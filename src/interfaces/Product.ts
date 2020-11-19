export interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
  stars: 0 | 1 | 2 | 3 | 4 | 5
  numVotes: number
  brand: string
}
