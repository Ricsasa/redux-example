import {
  FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, ADD_TO_CART,
  DELETE_FROM_CART
} from './actions';

const initialState = {
  productList: {
    pending: false,
    products: [],
    error: null
  },
  cart: {
    total: 0,
    products: []
  }
}

export function mainReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    //FETCH_PRODUCTS ACTIONS
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        productList: {
          ...state.productList,
          pending: true
        }
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: {
          ...state.productList,
          pending: false,
          products: action.products
        }
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        productList: {
          ...state.productList,
          pending: false,
          error: action.error
        }
      }
    //CART ACTIONS
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          products: [...state.cart.products, action.product],
          total: [...state.cart.products, action.product].reduce((acc, product) => {
            return acc + product.price
          }, 0)
        }
      }
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: {
          products: state.cart.products.filter((product) => product.productId !== action.product.productId),
          total: state.cart.total - action.product.price
        }
      }
    default:
      return state;
  }
}
