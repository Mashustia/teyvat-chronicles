import {FC, ReactElement} from 'react'

import {IOption, ISkillLevelSelectProps as IProps} from './types';
import './SkillLevelSelect.css'

const SkillLevelSelect: FC<IProps> = ({ id, name, options}): ReactElement => {
  const selectOptions = options.map((option: IOption) => (
    <option key={option.id} className='skill-select__option'>
      {option.text}
    </option>
  ))

  return (
    <div>
      {name && <label htmlFor={id} className='me-2'>{name}</label>}
      <select id={id} className='skill-select__select ps-1'>
        {selectOptions}
      </select>
    </div>
  )
}

export default SkillLevelSelect
