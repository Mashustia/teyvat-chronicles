import {Component, ReactElement} from 'react'
import {Col, Container, Row} from 'react-bootstrap';

export class Layout extends Component {
  public render(): ReactElement {
    return (
      <Container>
        <header>
          <h1>
            Welcome to Teyvat chronicles, choose the character you want to check
          </h1>
        </header>

        <Row>
          <Col xs={12} sm={6} md={2}>11111</Col>
          <Col xs={12} sm={6} md={2}>11111</Col>
          <Col xs={12} sm={6} md={2}>11111</Col>
          <Col xs={12} sm={6} md={2}>11111</Col>
          <Col xs={12} sm={6} md={2}>11111</Col>
          <Col xs={12} sm={6} md={2}>11111</Col>
          <Col xs={12} sm={6} md={2}>11111</Col>
          <Col xs={12} sm={6} md={2}>11111</Col>
          <Col xs={12} sm={6} md={2}>11111</Col>
          <Col xs={12} sm={6} md={2}>11111</Col>
          <Col xs={12} sm={6} md={2}>11111</Col>
        </Row>
      </Container>
    )
  }
}

export default Layout
