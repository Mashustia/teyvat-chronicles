import {FC, ReactElement} from 'react'
import {useTranslation} from 'react-i18next';

import SkillLevelSelect from '../SkillLevelSelect';
import {SKILL_LEVEL_OPTIONS} from '../../../../../../const/consts';
import {Skill} from '../../../../../../const/translations';
import Button from '../../../../../../common/Button';
import './SkillLevelGroup.css'
import {ISkillLevelGroupProps} from './types';
import {ButtonType} from '../../../../../../common/Button/types';

const SkillLevelGroup: FC<ISkillLevelGroupProps> = ({skillLevel, onChangeLevel, onReset}): ReactElement => {
  const {t} = useTranslation(['character', 'common']);
  const handleReset = (name: string) => () => onReset(name)

  const renderGroup = (name: string, text: string) => {
    return (
      <div className='skill-level-group__skill' key={name}>
        <p className='text-left me-3 skill-level-group__skill-name'>{text}</p>
        <div className='d-flex justify-content-between skill-level-group__select-wrapper'>
          <div className='me-4'>
            <SkillLevelSelect
              id='from'
              name={name}
              options={SKILL_LEVEL_OPTIONS}
              value={skillLevel[name].from}
              onChange={onChangeLevel}
            />
            <span className='skill-level-group__select-separator'>-</span>
            <SkillLevelSelect
              id='to'
              name={name}
              options={SKILL_LEVEL_OPTIONS}
              value={skillLevel[name].to}
              onChange={onChangeLevel}
            />
          </div>
          <Button type={ButtonType.BUTTON} onClick={handleReset(name)}>{t('common:reset')}</Button></div>
      </div>
    )
  }

  const groups = Object.entries(Skill).map((groupName: [string, string]) => renderGroup(groupName[0], t(groupName[1])))

  return (
    <div>
      <h4 className='mb-3 px-2'>{t('character:talents_enhancement')}</h4>

      <div className='skill-level-group table-border p-3 grid grid-gap-y-lg'>{groups}</div>
    </div>
  )
}

export default SkillLevelGroup
