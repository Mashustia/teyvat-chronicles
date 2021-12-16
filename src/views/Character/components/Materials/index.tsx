import {FC, ReactElement, ReactNode} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col, Row} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

import {ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import Material from '../Material';
import {IRouteParams} from '../../../../types/commonTypes';
import CharacterImage from '../../../../common/CharacterImage';
import Stars from '../../../../common/Stars';
import AscensionSummary from '../AscensionSummary';

const Materials: FC<RouteComponentProps<IRouteParams>> = ({match: {params}}): ReactElement => {
  const {t} = useTranslation('character');
  const {name} = params
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const ascensionMaterials = Object.entries(activeCharacter.ascension_materials)
  const talentMaterials = activeCharacter?.talent_materials ?
    Object.entries(activeCharacter.talent_materials) : []

  const {rarity} = activeCharacter

  const renderTalentMaterials = (): ReactNode => talentMaterials.length > 0 && (
    <Col xs={12}>
      <h4 className='mb-3'>{t('character:talents_enhancement')}</h4>
      {talentMaterials.map((value, index) => {
        if (!value[0]) return null

        return <Material data={value} key={index}/>
      })}
      {activeCharacter?.talent_materials && <AscensionSummary ascensionMaterials={activeCharacter.talent_materials}/>}
    </Col>
  )

  const renderPossibleTeams = (): ReactNode => activeCharacter.possible_teams && (
    <Col xs={12}>
      <h4 className='mb-3'>{t('character:possible_teams')}</h4>
      <p className='fs-6'>{t('character:teams_warning')}</p>
      {activeCharacter.possible_teams.map((team: string[]) => (
        <Row className='align-items-center gx-3 gy-2 table-border mb-3 ascension-material' key={uuid()}>
          {team.map((characterName: string) => (
            <Col key={uuid()} className='d-flex flex-column mb-auto' xs={3}>
              <CharacterImage name={characterName} key={characterName} withBorder={true}/>
              <p className='mb-1 fs-6'>{t(`character:names.${characterName}`)}</p>
            </Col>
          ))}
        </Row>
      ))}
    </Col>
  )

  return (
    <Row className='justify-content-center'>
      <Col sm={12} md={12} lg={8} xl={7} xxl={6}>
        <Row className='justify-content-center gx-3 gy-3'>
          <Col xs={12}>
            <CharacterImage name={name} withBorder={true}/>
            <h1 className='fs-3 mb-0'>{t(`character:names.${name}`)}</h1>
            <Stars count={rarity}/>
          </Col>

          <Col xs={12}>
            <h4 className='mb-3'>{t('character:ascension_materials')}</h4>
            {ascensionMaterials.map((value, index) => {
              if (!value[0]) return null

              return <Material data={value} key={index}/>
            })}
            <AscensionSummary ascensionMaterials={activeCharacter.ascension_materials}/>
          </Col>

          {renderTalentMaterials()}

          {renderPossibleTeams()}
        </Row>
      </Col>
    </Row>
  )
}

export default withRouter(Materials)
