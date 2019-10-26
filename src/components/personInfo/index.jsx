import React from 'react';
import { Container, Card, ListGroup, } from 'react-bootstrap';
import "./index.scss"

class PersonInfo extends React.Component {
  render() {
    const { info = [], personInfo: { name, gender, } } = this.props
    const col = info.map((item) => <ListGroup.Item key={item}>{item}</ListGroup.Item>)
    return (<Container className="margin">
      <Card bg="success">
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          {col}
        </ListGroup>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {gender}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>)
  }
}
export default PersonInfo;
