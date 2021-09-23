import {Component, ReactElement} from 'react'
import {Container} from 'react-bootstrap';
import Characters from '../Characters';

export class Layout extends Component {
  public render(): ReactElement {
    return (
      <Container>
        <header>
          <h1 className='h1 pt-2'>
            Welcome to Teyvat chronicles, choose the character you want to check
          </h1>
        </header>

        <Characters/>
      </Container>
    )
  }
}

export default Layout
