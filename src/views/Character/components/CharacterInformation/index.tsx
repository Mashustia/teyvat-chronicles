import {FC, ReactElement, ReactNode} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col, Row} from 'react-bootstrap';
import {v4 as uuid} from 'uuid';

import {ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import {IRouteParams} from '../../../../types/commonTypes';
import CharacterImage from '../../../../common/CharacterImage';
import Stars from '../../../../common/Stars';
import LevelMaterials from '../LevelMaterials';
import './CharacterInformation.css'
import TalentMaterials from '../TalentMaterials';

const CharacterInformation: FC<RouteComponentProps<IRouteParams>> = ({match: {params}}): ReactElement => {
  const {t} = useTranslation(['character', 'common']);
  const {name} = params
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const {rarity} = activeCharacter

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

        <TalentMaterials/>

        {renderPossibleTeams()}

      </Row>
    </div>
  )
}

export default withRouter(CharacterInformation)
