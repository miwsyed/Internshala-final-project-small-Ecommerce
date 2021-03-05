import React, { useState, useCallback } from 'react';

const KeyBoards = () => {
  const [productKeyboard, setproductKeyboard] = useState([
    {
      id: '1a',
      name: 'Ducky One 2',
      price: 100,
      currency: 'USD',
      delivery: false,
      thumbnail:
        'https://mechanicalkeyboards.com/shop/images/products/large_DKME1961ST-USPDZZT1_10.jpg',
      inStock: true,
      categoryId: 'fgsa2142fa',
    },
    {
      id: '2a',
      name: 'Varmilo Sakura',
      price: 140,
      currency: 'USD',
      delivery: true,
      thumbnail:
        'https://mechanicalkeyboards.com/shop/images/products/large_2790_SakuraTKL_1.jpg',
      inStock: true,
      categoryId: 'fgsa2142fa',
    },
    {
      id: '3a',
      name: 'MK Disco',
      price: 80,
      currency: 'USD',
      delivery: true,
      thumbnail:
        'https://mechanicalkeyboards.com/shop/images/products/large_2017_Disco_White_Caps_1.png',
      inStock: false,
      categoryId: 'fgsa2142fa',
    },
  ]);

  console.log(productKeyboard);

  return <div>Hello</div>;
};

export default KeyBoards;
