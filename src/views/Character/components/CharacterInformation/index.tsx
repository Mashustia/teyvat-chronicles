import {FC, ReactElement} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Row} from 'react-bootstrap';

import {ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import {IRouteParams} from '../../../../types/commonTypes';
import CharacterImage from '../../../../common/CharacterImage';
import Stars from '../../../../common/Stars';
import LevelMaterials from '../LevelMaterials';
import './CharacterInformation.css'
import TalentMaterials from '../TalentMaterials';
import PossibleTeams from '../PossibleTeams';

const CharacterInformation: FC<RouteComponentProps<IRouteParams>> = ({match: {params}}): ReactElement => {
  const {t} = useTranslation(['character', 'common']);
  const {name} = params
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const {rarity} = activeCharacter

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

        <PossibleTeams/>
      </Row>
    </div>
  )
}

export default withRouter(CharacterInformation)
