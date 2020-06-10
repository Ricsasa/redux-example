export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';


//PRODUCT_LIST ACTIONS
export const fetchProductsPending = () => (
  {
    type: FETCH_PRODUCTS_PENDING
  }
);

export const fetchProductsSuccess = (products) => (
  {
    type: FETCH_PRODUCTS_SUCCESS,
    products,
  }
)

export const fetchProductsError = (error) => (
  {
    type: FETCH_PRODUCTS_ERROR,
    error
  }
)

//CART ACTIONS
export const addToCart = (product) => (
  {
    type: ADD_TO_CART,
    product
  }
)

export const deleteFromCart = (product) => (
  {
    type: DELETE_FROM_CART,
    product
  }
)