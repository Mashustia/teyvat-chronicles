import {Component, ReactElement} from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import Characters from '../Characters';

export class Layout extends Component {
  public render(): ReactElement {
    return (
      <Container>
        <header>
          <Row>
            <Col>
              <h1 className='h1 pt-2'>
                Welcome to Teyvat chronicles, choose the character you want to check
              </h1>
            </Col>
          </Row>
        </header>

        <Characters/>
      </Container>
    )
  }
}

export default Layout
