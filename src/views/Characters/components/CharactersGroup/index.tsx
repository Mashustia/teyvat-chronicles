import {FC, Fragment} from 'react'
import {Row} from 'react-bootstrap';
import {groupBy, sortBy} from 'lodash'

import Character from '../Character';
import {ICharactersGroup as IProps} from './types';
import {ICharacterProps as ICharacter} from '../Character/types';

export enum groupField {
  VISION = 'vision',
  NAME = 'name',
  TRANSLATED_NAME = 'translated_name'
}

const CharactersGroup: FC<IProps> = ({characters}) => {
  const sortedCharacters = sortBy(characters, [groupField.VISION, groupField.TRANSLATED_NAME])
  const charactersByVision = groupBy(sortedCharacters, groupField.VISION)
  const groupedCharacterKeys = Object.keys(charactersByVision)

  const items = () => groupedCharacterKeys.map((key: string) => (
    <Fragment key={key}>
      <Row className='justify-content-center gx-3 mt-3 mb-5'>
        {charactersByVision[key].map((character: ICharacter) =>
          <Character key={character.name} {...character}/>)}
      </Row>
    </Fragment>
  ))

  return <>{items()}</>
}

export default CharactersGroup
