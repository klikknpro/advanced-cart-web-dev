import React from 'react';
import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json'; // object[]
import StoreItem from '../components/StoreItem';

const Store = () => {
  return (
    <div className='store'>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className='g-3'>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;
