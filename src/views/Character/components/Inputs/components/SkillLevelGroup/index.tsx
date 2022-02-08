import {FC, ReactElement} from 'react'
import {useTranslation} from 'react-i18next';

import SkillLevelSelect from '../SkillLevelSelect';
import {SKILL_LEVEL_OPTIONS} from '../../../../../../const/consts';
import {Skill} from '../../../../../../const/translations';

const SkillLevelGroup: FC = (): ReactElement => {
  const {t} = useTranslation(['character', 'common']);

  const renderGroup = (name: string) => {
    return (
      <div className='grid-2 mb-2'>
        <p className='mb-0 text-left'>{name}</p>
        <div className='grid-3'>
          <SkillLevelSelect id='attack_from' options={SKILL_LEVEL_OPTIONS}/>
          -
          <SkillLevelSelect id='attack_to' options={SKILL_LEVEL_OPTIONS}/>
        </div>
      </div>
    )
  }

  const groups = Object.entries(Skill).map((groupName: [string, string]) => renderGroup(t(groupName[1])))

  return (
    <div className='p-2'>
      <h4 className='mb-3'>{t('character:talents_enhancement')}</h4>

      {groups}
    </div>
  )
}

export default SkillLevelGroup
