import {match} from 'react-router-dom';

import {IRouteParams} from '../types/commonTypes';
import {useEffect} from 'react';

export const getOrgDataFromMatch = (matchData: match<IRouteParams>): string => {
  if (matchData?.params?.name) {
    return `/${matchData.params.name}`
  }

  return ''
}

export const createUrl = (urlData: match<IRouteParams> | string, ...rest: Array<string | number>): string => {
  const org = typeof urlData === 'string' ? `/${urlData}` : getOrgDataFromMatch(urlData)

  return (
    org +
    rest.reduce((accumulator: string, currentValue: string | number) => {
      if (!currentValue) return accumulator

      const newCurrentValue =
        typeof currentValue !== 'number' && !currentValue.includes('/') && accumulator.slice(-1) !== '/'
          ? `/${currentValue}`
          : currentValue
      return `${accumulator}${newCurrentValue}`
    }, '')
  )
}

export const ScrollToTopOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
