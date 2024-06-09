// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchProduct } from './redux/slices/productSlice';
// import axios from 'axios';

function App() {
  // const [products, setProducts] = useState([]);
  // const fetchProduct = async () => {
  //   const res = await axios('https://fakestoreapi.com/products');
  //   const data = res.data;
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ background: 'gray', width: '300px', height: '20px' }} />
        <div style={{ background: 'gray', width: '300px', height: '20px' }} />
        <div style={{ background: 'gray', width: '300px', height: '20px' }} />
        <div style={{ background: 'gray', width: '300px', height: '20px' }} />
        <div style={{ background: 'gray', width: '300px', height: '20px' }} />
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
