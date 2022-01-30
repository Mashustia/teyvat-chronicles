import {FC, ReactElement} from 'react'

import {Levels} from '../../../../../../charactersData/common';
import {ILevel} from '../../../../../../charactersData/types';
import './LevelSelectOptions.css'
import {ILevelSelectOption} from './types';

const LevelSelectOptions: FC<ILevelSelectOption> = ({onSelectOption}): ReactElement => {
  const handleSelectOption = (option: ILevel) => () => onSelectOption(option)

  const levelButton = (levelInfo: ILevel) => <button className='level-select-options__button' onClick={handleSelectOption(levelInfo)} key={`${levelInfo.lvl}${levelInfo.isAscended}`}>{levelInfo.lvl}</button>
  const buttons = Levels.map(levelButton)

  return (
    <div className='level-select-options grid-4'>{buttons}</div>
  )
}

export default LevelSelectOptions
