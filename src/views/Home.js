import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { useDispatch, useSelector } from 'react-redux'
import fetchProducts from '../redux/fetchProducts'

const Home = () => {

  const pending = useSelector(store => store.productList.pending)
  const error = useSelector(store => store.productList.error)
  const products = useSelector(store => store.productList.products)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <>
      <h1>HOME</h1>
      {pending && "LOADING"}
      {error && "Error!!"}
      {Array.isArray(products) && products.length > 0 && <ProductList products={products} />}
      {Array.isArray(products) && products.length === 0 && "No hay productos!!"}
    </>
  )
};

export default Home;
