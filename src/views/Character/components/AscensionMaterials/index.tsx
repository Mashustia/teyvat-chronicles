import {FC, ReactElement} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col, Row} from 'react-bootstrap';

import {ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import AscensionMaterial from '../AscensionMaterial';
import {IRouteParams} from '../../../../types/commonTypes';

const AscensionMaterials: FC<RouteComponentProps<IRouteParams>> = ({match: {params}}): ReactElement => {
  const {t} = useTranslation();
  const {name} = params
  const imagePath = `/images/characters/${name}.png`
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const ascensionMaterials = Object.entries(activeCharacter.ascension_materials)
  const talentMaterials = activeCharacter?.talent_materials ?
    Object.entries(activeCharacter.talent_materials) : []

  return (
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

          {talentMaterials.length > 0 && (
            <Col xs={12}>
              <h4 className='mb-3'>{t('character:talents_materials')}</h4>
              {talentMaterials.map((value, index) => {
                if (!value[0]) return null

                return <AscensionMaterial data={value} key={index}/>
              })}
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  )
}

export default withRouter(AscensionMaterials)
