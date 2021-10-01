import {FC, ReactElement, useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col, Row, Container, CloseButton, Stack} from 'react-bootstrap';

import {ICharacterProps as IProps} from './types';
import {ICharacter} from '../../charactersData/types';
import CHARACTERS from '../../charactersData';
import AscensionMaterial from './components/AscensionMaterial';
import {RouteName} from '../../const/consts';

const Character: FC<IProps> = ({match: {params}, history}): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const {t} = useTranslation();
  const {name} = params
  const imagePath = `/images/characters/${name}.png`
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const ascensionMaterials = Object.entries(activeCharacter.ascension_materials)
  const handleGoBack = () => history.push(RouteName.DEFAULT)

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={12} md={12} lg={8} xl={7} xxl={6} className='align-content-end'>
          <Stack direction='horizontal' gap={3}>
            <CloseButton variant='white' className='ms-auto' onClick={handleGoBack}/>
          </Stack>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col sm={12} md={12} lg={8} xl={7} xxl={6}>
          <Row className='justify-content-center gx-3'>
            <Col xs={12}>
              <img src={imagePath} alt={name} className='character-img'/>
              <h1 className='fs-3'>{t(`character:names.${name}`)}</h1>
            </Col>
            <Col xs={12}>
              <h4 className='mb-3'>{t('character:ascension_materials')}</h4>
              {ascensionMaterials.map((value, index) => {
                if (!value[0]) return null

                return <AscensionMaterial data={value} key={index}/>
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(Character)
