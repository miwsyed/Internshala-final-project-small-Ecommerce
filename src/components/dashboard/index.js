import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Divider } from 'rsuite';
import { useProfile } from '../../context/profile.context';

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();

  const namey = profile.name.split(' ')[0];

  return (
    <>
      <Drawer.Body>
        <h3>Hey, {namey}</h3>
        <Divider />

        <h2 style={{ 'text-align': 'center' }}>Categories</h2>
        <Divider />
        <Link to="/headphones">
          <Button>1.HeadPhones</Button>
        </Link>
        <hr />
        <Link to="/keyboards">
          <Button>2.Keyboards</Button>
        </Link>
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
