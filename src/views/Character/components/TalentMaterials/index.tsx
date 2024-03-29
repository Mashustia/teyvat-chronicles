import {FC, ReactElement, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Col} from 'react-bootstrap';
import {cloneDeep} from 'lodash';

import {ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import {IRouteParams} from '../../../../types/commonTypes';
import {Character, SkillSelectName} from '../../../../const/consts';
import SkillLevelGroup from '../Inputs/components/SkillLevelGroup';
import {IInitialSkillLevel} from './types';
import AscensionSummary from '../AscensionSummary';

const initialSkillLevel: IInitialSkillLevel = {
  attack: {
    from: 1,
    to: 1
  },
  elemental_skill: {
    from: 1,
    to: 1
  },
  elemental_burst: {
    from: 1,
    to: 1
  },
}

const TalentMaterials: FC = (): ReactElement => {
  const [skillLevel, changeSkillLevel] = useState(initialSkillLevel)
  const { name } = useParams<IRouteParams>();

  useEffect(() => {
    changeSkillLevel(initialSkillLevel)
  }, [name])

  const handleChange = (name: string | number, id: string, value: string | number) => {
    const newSkillLevel = cloneDeep(skillLevel)

    if (id === SkillSelectName.TO && skillLevel[name].from > value) {
      newSkillLevel[name][id] = value
      newSkillLevel[name][SkillSelectName.FROM] = value
    } else if (id === SkillSelectName.FROM && skillLevel[name].to < value) {
      newSkillLevel[name][id] = value
      newSkillLevel[name][SkillSelectName.TO] = value
    } else {
      newSkillLevel[name][id] = value
    }

    changeSkillLevel(newSkillLevel)
  }

  const handleLevelReset = (skill: string) => {
    const newSkillLevel = cloneDeep(skillLevel)
    newSkillLevel[skill] = initialSkillLevel[skill]

    changeSkillLevel(newSkillLevel)
  }

  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === name)

  if (!activeCharacter) return <></>

  const renderOtherCharactersTalentMaterials = (): ReactElement => (
    <Col xs={12} className='mb-4'>
      <SkillLevelGroup skillLevel={skillLevel} onChangeLevel={handleChange} onReset={handleLevelReset}/>

      <AscensionSummary
        characterData={activeCharacter}
        skillLevel={skillLevel}
        isTraveler={activeCharacter.name === Character.TRAVELER_GEO}
      />
    </Col>
  )

  return renderOtherCharactersTalentMaterials()
}

export default TalentMaterials
