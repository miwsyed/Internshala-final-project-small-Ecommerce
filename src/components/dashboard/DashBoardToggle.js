import React, { memo, useCallback } from 'react';
import { Button, Icon, Drawer, Alert } from 'rsuite';
import { makeStyles } from '@material-ui/core/styles';
import { useModalState, useMediaQuery } from '../../misc/custom-hooks';
import Dashboard from '.';
import { auth } from '../../misc/firebase';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: '0',
  },
});

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery('(max-width: 992px)');

  const onSignOut = useCallback(() => {
    auth.signOut();

    Alert.info('Signed out', 4000);

    close();
  }, [close]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Categories
      </Button>
      <Drawer
        size="xs"
        full={isMobile}
        show={isOpen}
        onHide={close}
        placement="left"
      >
        <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </div>
  );
};
export default memo(DashboardToggle);
