import React, { memo, useState } from 'react';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../components/Sidebar';
import Products from '../components/Products';
import PRODUCTS from '../db/products.json';

const Home = () => {
  const [products] = useState(PRODUCTS);

  return (
    <Grid fluid className="h-100">
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
