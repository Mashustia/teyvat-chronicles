import {FC, ReactElement, useState} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Col} from 'react-bootstrap';
import {cloneDeep} from 'lodash';

import {ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import {IRouteParams} from '../../../../types/commonTypes';
import {Character, SkillSelectName} from '../../../../const/consts';
import SkillLevelGroup from '../Inputs/components/SkillLevelGroup';
import {IInitialSkillLevel} from './types';
import AscensionSummaryReworked from '../AscensionSummary/AscensionSummaryReworked';

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

const TalentMaterials: FC<RouteComponentProps<IRouteParams>> = ({match: {params}}): ReactElement => {
  const [skillLevel, changeSkillLevel] = useState(initialSkillLevel)

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

  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const renderOtherCharactersTalentMaterials = (): ReactElement => (
    <Col xs={12} className='mb-3'>
      <SkillLevelGroup skillLevel={skillLevel} onChangeLevel={handleChange} onReset={handleLevelReset}/>

      <AscensionSummaryReworked
        characterData={activeCharacter}
        skillLevel={skillLevel}
        isTraveler={activeCharacter.name === Character.TRAVELER}
      />
    </Col>
  )

  return renderOtherCharactersTalentMaterials()
}

export default withRouter(TalentMaterials)
