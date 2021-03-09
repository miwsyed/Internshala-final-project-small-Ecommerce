import React, { memo } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/logo.png';
import useStyles from './styles';
import { useCart } from '../../context/profile.context';

const Navbar = () => {
  const classes = useStyles();
  const cart = useCart();

  const CartItems = cart.length;

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          {/* typography for logo and our brand */}
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="SmartShopping"
              height="25px"
              className={classes.image}
            />
            SmartShopping
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={CartItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default memo(Navbar);
