import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Col, Panel, Row } from 'rsuite';
import { useCart, useProfile, useSetCart } from '../context/profile.context';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: 400,
  },
});

export default function ImgMediaCard(props) {
  const setCart = useSetCart();
  const cart = useCart();

  const [allProduct, setProduct] = useState(props);
  const addToCart = product => {
    setCart([...cart, allProduct.products.product]);
  };
  console.log(cart);

  const classes = useStyles();

  return (
    <Panel
      style={{ marginTop: 10 }}
      className={classes.root}
      header="Gaming Accessories"
      bordered
    >
      <Row>
        <Col xs={24} md={12}>
          <img
            style={{ maxHeight: '15rem', maxWidth: '100%', height: 'auto' }}
            src={allProduct.products.product.img}
            alt={allProduct.products.product.alt}
          />
          <h3>{allProduct.products.product.name}</h3>
          <div>${allProduct.products.product.price}</div>
        </Col>
        <Col xs={24} md={12}>
          <Button onClick={addToCart} variant="contained" color="primary">
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Panel>
  );
}
