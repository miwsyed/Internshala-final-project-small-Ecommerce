import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Panel } from 'rsuite';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: 400,
  },
});

export default function ImgMediaCard(props) {
  const [allProduct, setProduct] = useState(props);

  const classes = useStyles();

  return (
    <Panel className={classes.root} header="Gaming Accessories" bordered>
      <img
        style={{ maxHeight: '15rem', 'max-width': '100%', height: 'auto' }}
        src={allProduct.products.product.img}
        alt={allProduct.products.product.alt}
      />
      <hr />
      <h3>{allProduct.products.product.name}</h3>
      <div>${allProduct.products.product.price}</div>
    </Panel>
  );
}
