import {FC, MouseEvent, ReactElement, RefObject, useRef, useState} from 'react'
import cn from 'classnames'

import Button from '../Button';
import {IDropdownProps} from './types';
import Flags from '../Header/components/flags';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import './LanguageSelector.css';

const LanguageSelector: FC<IDropdownProps> = ({languages, activeLanguage, onSelect}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null);
  const toggleButtonRef: RefObject<HTMLButtonElement> | null = useRef(null);

  const handleOutsideClick = (e: MouseEvent | KeyboardEvent) => {
    if (toggleButtonRef?.current?.contains(e.target as HTMLElement)) return

    return setIsOpen(false)
  }

  useOnClickOutside(menuRef, handleOutsideClick)

  const handleLanguageChange = (language: string) => () => {
    onSelect(language)
    setIsOpen(false)
  }

  const renderOptions = () => (
    <div
      className={cn(isOpen ? 'open' : 'hidden', 'language-selector position-absolute d-flex flex-column py-2')}
      ref={menuRef}
    >
      {languages.map((language: string) =>
        <span
          key={language}
          className={cn('language-selector__option d-flex px-3 py-1', (activeLanguage !== language) && 'pointer')}
          onClick={handleLanguageChange(language)}
        >
          {<Flags language={language}/>}
        </span>
      )}
    </div>
  )

  const handleDropdownToggle = () => setIsOpen(!isOpen)

  const arrowDownIcon = (
    <span className='ps-2'>
      <img src='/images/icons/arrow-down.svg' alt='star' className='language-selector__arrow'/>
    </span>
  )

  return (
    <div className='position-relative'>
      <Button
        iconLeft={arrowDownIcon}
        onClick={handleDropdownToggle}
        innerRef={toggleButtonRef}
      >
        {<Flags language={activeLanguage}/>}
      </Button>
      {isOpen && renderOptions()}
    </div>
  )
}

export default LanguageSelector
