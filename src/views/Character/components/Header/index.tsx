import {FC, ReactElement} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Col, Row, CloseButton, Stack} from 'react-bootstrap';

import {RouteName} from '../../../../const/consts';
import {IRouteParams} from '../../../../types/commonTypes';

const Header: FC<RouteComponentProps<IRouteParams>> = ({history}): ReactElement => {
  const handleGoBack = () => history.push(RouteName.DEFAULT)

  return (
      <Row className='justify-content-center'>
        <Col sm={12} md={12} lg={8} xl={7} xxl={6} className='align-content-end'>
          <Stack direction='horizontal' gap={3}>
            <CloseButton variant='white' className='ms-auto' onClick={handleGoBack}/>
          </Stack>
        </Col>
      </Row>
  )
}

export default withRouter(Header)
