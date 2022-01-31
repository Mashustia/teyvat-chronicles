import {FC, ReactElement} from 'react'

import {Levels} from '../../../../../../charactersData/common';
import {ILevel} from '../../../../../../charactersData/types';
import {ILevelSelectOption} from './types';
import './LevelSelectOptions.css'
import cn from 'classnames';

const LevelSelectOptions: FC<ILevelSelectOption> = ({onSelectOption, selectedLevel}): ReactElement => {
  const handleSelectOption = (option: ILevel) => () => onSelectOption(option)

  const ascensionIcon = (
    <img src='/images/icons/primogem-2.png' alt='primogem' className='level-select-options__icon'/>
  )

  const levelButton = (levelInfo: ILevel) => {
    const isLevelSelected = selectedLevel.lvl === levelInfo.lvl && selectedLevel.isAscended === levelInfo.isAscended
    const buttonStyles = cn('level-select-options__button px-1 py-2 d-flex align-items-center justify-content-center', isLevelSelected && 'level-select-options__button--selected')

    return (
      <button
        className={buttonStyles}
        onClick={handleSelectOption(levelInfo)}
        key={`${levelInfo.lvl}${levelInfo.isAscended}`}
        type='button'
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
    </div>
  )
}

export default LevelSelectOptions
