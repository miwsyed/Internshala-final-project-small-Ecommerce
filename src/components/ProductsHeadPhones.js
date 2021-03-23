import React, { memo } from 'react';
import ImgMediaCard from './ProductCard';

const ProductsHeadPhones = ({ product }) => {
  return (
    <div>
      <ImgMediaCard product={product} />
    </div>
  );
};

export default memo(ProductsHeadPhones);
