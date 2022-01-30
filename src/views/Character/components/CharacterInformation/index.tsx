import {FC, ReactElement, ReactNode} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col, Row} from 'react-bootstrap';
import {v4 as uuid} from 'uuid';

import {IAscensionMaterials, ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import Material from '../Material';
import {IRouteParams} from '../../../../types/commonTypes';
import CharacterImage from '../../../../common/CharacterImage';
import Stars from '../../../../common/Stars';
import AscensionSummary from '../AscensionSummary';
import {Character} from '../../../../const/consts';
import LevelMaterials from '../LevelMaterials';
import './CharacterInformation.css'

const CharacterInformation: FC<RouteComponentProps<IRouteParams>> = ({match: {params}}): ReactElement => {
  const {t} = useTranslation(['character', 'common']);
  const {name} = params
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const {rarity} = activeCharacter

  const renderMaterials = (talentInfo: IAscensionMaterials | undefined) => {
    if (!talentInfo) return null

    const materials = talentInfo ? Object.entries(talentInfo) : []

    return (
      <>
        {materials.map((value, index) => {
          if (!value[0]) return null

          return <Material data={value} key={index}/>
        })}
        {talentInfo && <AscensionSummary ascensionMaterials={talentInfo}/>}
      </>
    )
  }

  const renderOtherCharactersTalentMaterials = (): ReactNode => activeCharacter?.talent_materials && (
    <Col xs={12}>
      <h4 className='mb-3'>{t('character:talents_enhancement')}</h4>
      {renderMaterials(activeCharacter?.talent_materials)}
    </Col>
  )

  const renderTravelerTalentMaterials = (): ReactElement => (
    <Col xs={12}>
      <h4 className='mb-3'>{t('character:talents_enhancement')}</h4>

      <h5 className='my-3'>{t('common:attack')}</h5>
      {renderMaterials(activeCharacter.attack)}

      <h5 className='my-4'>{t('common:elemental_skill')}</h5>
      {renderMaterials(activeCharacter.elemental_skill)}

      <h5 className='my-4'>{t('common:elemental_burst')}</h5>
      {renderMaterials(activeCharacter.elemental_burst)}
    </Col>
  )

  const renderTalentMaterials = (): ReactNode => {
    if (activeCharacter.name === Character.TRAVELER) return renderTravelerTalentMaterials()

    return renderOtherCharactersTalentMaterials()
  }


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
    <div className='character-info'>
      <Row className='justify-content-center gx-3 gy-3'>
        <div className='grid'>
          <CharacterImage name={name} withBorder={true}/>
          <h1 className='fs-3 mb-0'>{t(`character:names.${name}`)}</h1>
          <Stars count={rarity}/>
        </div>

        <LevelMaterials/>

        {renderTalentMaterials()}

        {renderPossibleTeams()}

      </Row>
    </div>
  )
}

export default withRouter(CharacterInformation)
