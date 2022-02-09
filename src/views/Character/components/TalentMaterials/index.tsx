import {FC, ReactElement, ReactNode, useState} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col} from 'react-bootstrap';
import {cloneDeep} from 'lodash';

import {IAscensionMaterials, ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import Material from '../Material';
import {IRouteParams} from '../../../../types/commonTypes';
import AscensionSummary from '../AscensionSummary';
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
  const {t} = useTranslation(['character', 'common']);
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

  const renderMaterialsSummary = (talentInfo: IAscensionMaterials | undefined) => {
    if (!talentInfo) return null

    return talentInfo && <AscensionSummaryReworked ascensionMaterials={talentInfo} skillLevel={skillLevel}/>
  }

  const renderMaterials = (talentInfo: IAscensionMaterials | undefined) => {
    if (!talentInfo) return null

    const materials = talentInfo ? Object.entries(talentInfo) : []

    return (
      <>
        {materials.map((value, index) => {
          if (!value[0]) return null

          return <Material data={value} key={index}/>
        })}
        {talentInfo && <AscensionSummary ascensionMaterials={talentInfo} skillLevel={skillLevel}/>}
      </>
    )
  }

  const renderOtherCharactersTalentMaterials = (): ReactNode => activeCharacter?.talent_materials && (
    <Col xs={12} className='mb-3'>
      <SkillLevelGroup skillLevel={skillLevel} onChangeLevel={handleChange} onReset={handleLevelReset}/>
      {renderMaterialsSummary(activeCharacter?.talent_materials)}
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

  return <>{renderTalentMaterials()}</>
}

export default withRouter(TalentMaterials)
