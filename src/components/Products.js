import React, { useState, memo } from 'react';
import ImgMediaCard from './ProductCard';

const Products = props => {
  const [products, setProducts] = useState(props);
  return (
    <div>
      <ImgMediaCard products={products} />
    </div>
  );
};

export default memo(Products);
