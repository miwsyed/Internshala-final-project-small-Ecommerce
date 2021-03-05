import React from 'react';
import { Redirect } from 'react-router';
import { Drawer, Button, Divider } from 'rsuite';
import { useProfile } from '../../context/profile.context';

const goToHeadPhones = () => {
  return <Redirect to={{ pathname: '/headphones' }} />;
};

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();

  const onSave = async newData => {
    console.log(newData);
  };
  const namey = profile.name.split(' ')[0];

  return (
    <>
      <Drawer.Body>
        <h3>Hey, {namey}</h3>
        <Divider />

        <h2 style={{ 'text-align': 'center' }}>Categories</h2>
        <Divider />
        <Button onclick={goToHeadPhones}>1.HeadPhones</Button>
        <hr />
        <Button>2.KeyBoards</Button>
      </Drawer.Body>

      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          Sign out
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;
