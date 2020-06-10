import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './actions';

const fetchProducts = () => {

  return dispatch => {
    dispatch(fetchProductsPending());

    fetch('https://genericapiv1.azurewebsites.net/v1/shop/products')
      .then(response => response.json())
      .then(response => {
        if(response.error) {
          throw(response.error)
        }

        dispatch(fetchProductsSuccess(response))
        
        return response;
      })
      .catch(error => {
        dispatch(fetchProductsError(error))
      })
  }
}

export default fetchProducts;