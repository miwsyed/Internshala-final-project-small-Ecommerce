import React, { memo } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { NavbarText } from 'reactstrap';
import logo from '../../assets/logo.png';
import useStyles from './styles';
import { useCart } from '../../context/profile.context';

const Navbar = () => {
  const classes = useStyles();
  const cart = useCart();
  const history = useHistory();
  const location = useLocation();

  const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);

  const gotoBasket = () => {
    if (cartItemsTotal > 0) {
      history.push('/basket');
    }
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          {/* typography for logo and our brand */}
          <NavbarText>
            <Link
              to="/"
              className="d-flex align-items-center"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="h6"
                className={classes.title}
                color="inherit"
              >
                <img
                  src={logo}
                  alt="SmartShopping"
                  height="25px"
                  className={classes.image}
                />
                SmartShopping
              </Typography>
            </Link>
          </NavbarText>
          <div className={classes.grow} />
          <div className={classes.button}>
            {location.pathname === '/' ||
            location.pathname === '/headphones' ||
            location.pathname === '/keyboards' ? (
              <IconButton aria-label="Show cart items" color="inherit">
                <Badge
                  onClick={gotoBasket}
                  badgeContent={cartItemsTotal}
                  color="secondary"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            ) : null}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default memo(Navbar);
