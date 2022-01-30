import {FC, ReactElement} from 'react'

import {Levels} from '../../../../../../charactersData/common';
import {ILevel} from '../../../../../../charactersData/types';
import {ILevelSelectOption} from './types';
import './LevelSelectOptions.css'

const LevelSelectOptions: FC<ILevelSelectOption> = ({onSelectOption}): ReactElement => {
  const handleSelectOption = (option: ILevel) => () => onSelectOption(option)

  const levelButton = (levelInfo: ILevel) => <button className='level-select-options__button' onClick={handleSelectOption(levelInfo)} key={`${levelInfo.lvl}${levelInfo.isAscended}`}>{levelInfo.lvl}</button>
  const buttons = Levels.map(levelButton)

  return (
    <div className='level-select-options py-3 px-4 grid-4 grid-gutters-lg'>{buttons}</div>
  )
}

export default LevelSelectOptions
