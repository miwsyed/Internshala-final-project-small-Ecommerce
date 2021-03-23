import React, { memo } from 'react';
import ImgMediaCard from './ProductCard';

const ProductsKeyboards = ({ product }) => {
  return (
    <div>
      <ImgMediaCard product={product} />
    </div>
  );
};

export default memo(ProductsKeyboards);
