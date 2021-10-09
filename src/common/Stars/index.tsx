import {FC, ReactElement} from 'react'

import './Stars.css'
import {IStars as IProps} from './types';

const Stars: FC<IProps> = ({count}) => {
  let firstStar = 1
  const stars: ReactElement[] = []

  const getStars = (starCounter: number): ReactElement[] => {
    if (firstStar <= starCounter) {
      stars.push(<img src='/images/icons/star.svg' alt='star' className='star-icon' key={firstStar}/>)
      firstStar++

      getStars(starCounter)
    }
    return stars
  }

  return <>{getStars(count)}</>
}

export default Stars
