import React, { useCallback, useState } from 'react';
import { Button, ButtonGroup, Table } from 'reactstrap';
import { useCart, useCartDispatch } from '../context/profile.context';
import PRODUCTS from '../db/products.json';

function getComputedItems(products, cartItems) {
  const productInCart = products.filter(p =>
    cartItems.some(item => item.id === p.id)
  );

  return productInCart.map(product => {
    return {
      ...product,
      quantity: cartItems.find(item => item.id === product.id).quantity,
    };
  });
}

const Basket = () => {
  const cart = useCart();

  const dispatchCart = useCartDispatch();

  const [products] = useState(PRODUCTS);

  const BasketItems = getComputedItems(products, cart);

  const BasketTotal = BasketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleAddItem = useCallback(
    id => {
      dispatchCart({ type: 'ADD_ITEM', id });
    },
    [dispatchCart]
  );

  const handleRemoveItem = useCallback(
    id => {
      dispatchCart({ type: 'REMOVE_ITEM', id });
    },
    [dispatchCart]
  );

  const handleDrop = useCallback(
    id => {
      dispatchCart({ type: 'DROP', id });
    },
    [dispatchCart]
  );

  return (
    <div style={{ marginTop: '80px' }}>
      <h1 className="h3 mb-4">Basket</h1>
      <div className="bg-white p-4 shadow-sm rounded-lg">
        <Table responsive>
          <thead>
            <tr>
              <th style={{ borderTop: 0 }}> </th>
              <th style={{ borderTop: 0 }}>Name</th>
              <th style={{ borderTop: 0 }}>Price </th>
              <th style={{ borderTop: 0 }}>Quantity</th>
              <th style={{ borderTop: 0 }}> </th>
            </tr>
          </thead>
          <tbody>
            {BasketItems.map(el => (
              <tr key={el.id} className="">
                <td>
                  <img
                    src={el.thumbnail}
                    alt={el.name}
                    style={{ width: 50, height: 'auto' }}
                  />
                </td>
                <td className="font-weight-bold align-middle text-nowrap">
                  {el.name}
                </td>
                <td className="font-weight-bold align-middle">${el.price}</td>
                <td className="font-weight-bold align-middle">
                  <ButtonGroup>
                    <Button
                      size="sm"
                      type="button"
                      onClick={() => handleRemoveItem(el.id)}
                    >
                      -
                    </Button>
                    <Button disabled style={{ width: 45 }}>
                      {el.quantity}
                    </Button>
                    <Button
                      size="sm"
                      type="button"
                      onClick={() => handleAddItem(el.id)}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </td>
                <td className="font-weight-bold align-middle">
                  <Button
                    color="dark"
                    className="rounded-circle d-flex justify-content-center align-content-center"
                    style={{
                      width: 30,
                      height: 30,
                      lineHeight: 0.6,
                      fontSize: 20,
                    }}
                    type="button"
                    onClick={() => handleDrop(el.id)}
                  >
                    &times;
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <hr />
        <div className="text-right">
          <div className="h3">Total ${BasketTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
