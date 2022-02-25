import {FC, ReactElement} from 'react'
import {useParams} from 'react-router-dom';
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

const CharacterInformation: FC = (): ReactElement => {
  const {t} = useTranslation(['character', 'common']);
  const { name } = useParams<IRouteParams>();
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === name)

  if (!activeCharacter) return <></>

  const {rarity, name: characterName} = activeCharacter

  return (
    <div className='character-info'>
      <div className='grid mb-2'>
        <CharacterImage name={characterName} withBorder={true}/>
        <h1 className='fs-3 mb-0'>{t(`character:names.${characterName}`)}</h1>
        <Stars count={rarity}/>
      </div>

      <LevelMaterials/>

      <TalentMaterials/>

      <PossibleTeams/>
    </div>
  )
}

export default CharacterInformation
