import {FC, ReactElement} from 'react'

import {Levels} from '../../../../../../charactersData/common';
import {ILevel} from '../../../../../../charactersData/types';
import './LevelSelectOptions.css'

const LevelSelectOptions: FC = (): ReactElement => {
  const levelButton = ({ lvl }: ILevel) => <button className='level-select-options__button'>{lvl}</button>
  const buttons = Levels.map(levelButton)

  return (
    <div className='level-select-options grid-4'>{buttons}</div>
  )
}

export default LevelSelectOptions
