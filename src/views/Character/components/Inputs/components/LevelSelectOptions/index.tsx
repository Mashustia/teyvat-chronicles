import {FC, ReactElement} from 'react'

import {Levels} from '../../../../../../charactersData/common';
import {ILevel} from '../../../../../../charactersData/types';
import {ILevelSelectOption} from './types';
import './LevelSelectOptions.css'

const LevelSelectOptions: FC<ILevelSelectOption> = ({onSelectOption}): ReactElement => {
  const handleSelectOption = (option: ILevel) => () => onSelectOption(option)

  const ascensionIcon = (
    <img src='/images/icons/primogem-2.png' alt='primogem' className='level-select-options__icon'/>
  )

  const levelButton = (levelInfo: ILevel) => (
    <button className='level-select-options__button p-1 d-flex align-items-center justify-content-center' onClick={handleSelectOption(levelInfo)} key={`${levelInfo.lvl}${levelInfo.isAscended}`}>
      {levelInfo.lvl}
      {levelInfo.isAscended && ascensionIcon}
    </button>
  )
  const buttons = Levels.map(levelButton)

  return (
    <div className='level-select-options py-2 px-2 grid-4 grid-gutters-lg'>
      {buttons}
    </div>
  )
}

export default LevelSelectOptions
