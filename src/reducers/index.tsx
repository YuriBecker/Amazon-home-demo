import { Product } from '../interfaces/Product'

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum Types {
  Delete = 'DELETE_PRODUCT',
  DeleteAll = 'DELETE_ALL_PRODUCTS',
  Add = 'ADD_PRODUCT'
}

type ProductPayload = {
  [Types.Add]: Product
  [Types.Delete]: number
  [Types.DeleteAll]: undefined
}

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>]

export const productReducer = (
  state: Product[],
  action: ProductActions
): Product[] => {
  switch (action.type) {
    case Types.Add:
      return [...state, action.payload]

    case Types.Delete: {
      const idToDelete = action.payload
      return [...state.filter(product => product.id !== idToDelete)]
    }

    case Types.DeleteAll: {
      return []
    }

    default:
      return state
  }
}
