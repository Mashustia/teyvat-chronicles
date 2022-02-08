import {FC, ReactElement} from 'react'
import {useTranslation} from 'react-i18next';

import SkillLevelSelect from '../SkillLevelSelect';
import {SKILL_LEVEL_OPTIONS} from '../../../../../../const/consts';
import {Skill} from '../../../../../../const/translations';
import Button from '../../../../../../common/Button';
import './SkillLevelGroup.css'

const SkillLevelGroup: FC = (): ReactElement => {
  const {t} = useTranslation(['character', 'common']);

  const renderGroup = (name: string) => {
    return (
      <div className='grid-3 align-items-center my-1'>
        <p className='mb-0 text-left fs-6'>{name}</p>
        <div className='grid-3 align-items-center'>
          <SkillLevelSelect id='attack_from' options={SKILL_LEVEL_OPTIONS}/>
          -
          <SkillLevelSelect id='attack_to' options={SKILL_LEVEL_OPTIONS}/>
        </div>
        <Button classes='mx-auto'>{t('common:reset')}</Button>
      </div>
    )
  }

  const groups = Object.entries(Skill).map((groupName: [string, string]) => renderGroup(t(groupName[1])))

  return (
    <div>
      <h4 className='mb-3 px-2'>{t('character:talents_enhancement')}</h4>

      <div className='skill-level-group table-border p-2 grid grid-gap-y-lg'>{groups}</div>
    </div>
  )
}

export default SkillLevelGroup
