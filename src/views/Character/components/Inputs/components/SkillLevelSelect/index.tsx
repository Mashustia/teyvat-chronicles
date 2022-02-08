import {FC, ReactElement} from 'react'

import {IOption, ISkillLevelSelectProps as IProps} from './types';

const SkillLevelSelect: FC<IProps> = ({ id, name, options}): ReactElement => {
  const selectOptions = options.map((option: IOption) => <option key={option.id}>{option.text}</option>)

  return (
    <div>
      {name && <label htmlFor={id} className='me-2'>{name}</label>}
      <select id={id}>
        {selectOptions}
      </select>
    </div>
  )
}

export default SkillLevelSelect
