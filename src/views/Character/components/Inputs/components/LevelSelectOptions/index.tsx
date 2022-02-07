import {FC, ReactElement} from 'react'
import cn from 'classnames';
import {useTranslation} from 'react-i18next';

import {Levels} from '../../../../../../charactersData/common';
import {ILevel} from '../../../../../../charactersData/types';
import {ILevelSelectOption} from './types';
import './LevelSelectOptions.css'

const LevelSelectOptions: FC<ILevelSelectOption> = ({onSelectOption, selectedLevel, minLevel}): ReactElement => {
  const {t} = useTranslation(['common']);

  const ascensionIcon = (
    <img src='/images/icons/primogem-2.png' alt='primogem' className='level-select-options__icon'/>
  )

  const levelButton = (levelInfo: ILevel) => {
    const isLevelSelected = selectedLevel.lvl === levelInfo.lvl && selectedLevel.isAscended === levelInfo.isAscended

    const levelIsLowerThanAllowed = minLevel &&
      ((minLevel.lvl > levelInfo.lvl) || (minLevel.lvl === levelInfo.lvl && (minLevel?.isAscended && !levelInfo.isAscended)))

    const buttonStyles = cn(
      'level-select-options__button px-1 py-2 d-flex align-items-center justify-content-center',
      isLevelSelected && 'level-select-options__button--selected',
      levelIsLowerThanAllowed && 'cursor-not-allowed level-select-options__button--disabled'
    )

    return (
      <button
        className={buttonStyles}
        onClick={onSelectOption(levelInfo)}
        key={`${levelInfo.lvl}${levelInfo.isAscended}`}
        type='button'
        disabled={levelIsLowerThanAllowed}
      >
        {levelInfo.lvl}
        {levelInfo.isAscended && ascensionIcon}
      </button>
    )
  }
  const buttons = Levels.map(levelButton)

  return (
    <div className='level-select-options py-2 px-2 grid-4 grid-gutters-lg'>
      {buttons}
      <p className='mb-0 level-select__tooltip'>{t('common:primogem_meaning')}</p>
    </div>
  )
}

export default LevelSelectOptions
