import {FC, ReactElement, ChangeEvent} from 'react'

import {IOption, ISkillLevelSelectProps as IProps} from './types';
import './SkillLevelSelect.css'

const SkillLevelSelect: FC<IProps> = ({ id, name, options, value, onChange}): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => onChange(name, id, parseInt(e.target.value))

  const selectOptions = options.map((option: IOption) => (
    <option key={option.id} className='skill-select__option' value={option.id}>
      {option.text}
    </option>
  ))

  return (
    <select id={id} className='skill-select__select' value={value} onChange={handleChange}>
      {selectOptions}
    </select>
  )
}

export default SkillLevelSelect
