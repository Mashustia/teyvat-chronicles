import {FC, ReactElement} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import {IRouteParams} from '../../../../types/commonTypes';
import CharacterImage from '../../../../common/CharacterImage';
import Stars from '../../../../common/Stars';
import LevelMaterials from '../LevelMaterials';
import TalentMaterials from '../TalentMaterials';
import PossibleTeams from '../PossibleTeams';
import './CharacterInformation.css'

const CharacterInformation: FC<RouteComponentProps<IRouteParams>> = ({match: {params}}): ReactElement => {
  const {t} = useTranslation(['character', 'common']);
  const {name} = params
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const {rarity} = activeCharacter

  return (
    <div className='character-info'>
      <div className='grid'>
        <CharacterImage name={name} withBorder={true}/>
        <h1 className='fs-3 mb-0'>{t(`character:names.${name}`)}</h1>
        <Stars count={rarity}/>
      </div>

      <LevelMaterials/>

      <TalentMaterials/>

      <PossibleTeams/>
    </div>
  )
}

export default withRouter(CharacterInformation)
