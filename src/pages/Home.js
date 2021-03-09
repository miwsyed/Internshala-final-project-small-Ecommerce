import React, { useState, memo } from 'react';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../components/Sidebar';
import Products from '../components/Products';
import Navbar from '../components/Navbar/Navbar';
import { useProfile } from '../context/profile.context';

const Home = () => {
  const { products } = useProfile();

  return (
    <Grid fluid className="h-100">
      <Navbar />
      <Row style={{ marginTop: 80 }}>
        <Col xs={24} md={4}>
          <Sidebar />
        </Col>
      </Row>

      <div>
        <Row>
          <Col xs={24} mdOffset={4} md={20}>
            {products.map((product, id) => (
              <div className="displayProducts" key={id}>
                <Products product={product} />
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </Grid>
  );
};

export default memo(Home);
