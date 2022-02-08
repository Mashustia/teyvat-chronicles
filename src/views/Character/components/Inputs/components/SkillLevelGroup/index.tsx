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
      <div className='d-flex flex-wrap align-items-baseline'>
        <p className='mb-0 text-left fs-6 me-auto mb-2 skill-level-group__name'>{name}</p>
        <div className='d-flex'>
          <div className='grid-3 align-items-center me-3'>
            <SkillLevelSelect id='attack_from' options={SKILL_LEVEL_OPTIONS}/>
            -
            <SkillLevelSelect id='attack_to' options={SKILL_LEVEL_OPTIONS}/>
          </div>
          <Button>{t('common:reset')}</Button></div>
      </div>
    )
  }

  const groups = Object.entries(Skill).map((groupName: [string, string]) => renderGroup(t(groupName[1])))

  return (
    <div>
      <h4 className='mb-3 px-2'>{t('character:talents_enhancement')}</h4>

      <div className='skill-level-group table-border p-3 grid grid-gap-y-lg'>{groups}</div>
    </div>
  )
}

export default SkillLevelGroup
