import React from 'react';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../components/Sidebar';
import Products from '../components/Products';

const Home = props => {
  const { products } = props;

  return (
    <Grid fluid className="h-100">
      <Row>
        <Col xs={24} md={4}>
          <Sidebar />
        </Col>
      </Row>
      <div>
        <Row>
          <Col xs={24} mdOffset={4} md={20}>
            {products.map(product => (
              <Products product={product} />
            ))}
          </Col>
        </Row>
      </div>
    </Grid>
  );
};

export default Home;
