import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const TransactionStatistics = ({ statistics }) => {
  return (
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Total Sales</Card.Title>
            <Card.Text>{statistics.totalSales || 0}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Total Sold Items</Card.Title>
            <Card.Text>{statistics.soldItems || 0}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Total Not Sold Items</Card.Title>
            <Card.Text>{statistics.unsoldItems || 0}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TransactionStatistics;