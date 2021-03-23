import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Col, Panel, Row } from 'rsuite';
import { useCartDispatch } from '../context/profile.context';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: 400,
  },
});

export default function ImgMediaCard({ product }) {
  const dispatchCart = useCartDispatch();

  const addToCart = useCallback(
    id => {
      dispatchCart({ type: 'ADD_ITEM', id });
    },
    [dispatchCart]
  );

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
            src={product.thumbnail}
            alt={product.alt}
          />
          <h3>{product.name}</h3>
          <div>${product.price}</div>
        </Col>
        <Col xs={24} md={12}>
          <Button
            onClick={() => addToCart(product.id)}
            variant="contained"
            color="primary"
          >
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Panel>
  );
}
