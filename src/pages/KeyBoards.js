import React, { memo, useState } from 'react';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../components/Sidebar';
import PRODUCTKEYBOARD from '../db/keyboards.json';
import ProductsKeyboards from '../components/ProductsKeyboards';

const Keyboards = () => {
  const [products] = useState(PRODUCTKEYBOARD);

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
                <ProductsKeyboards product={product} />
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </Grid>
  );
};

export default memo(Keyboards);
