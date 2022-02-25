import {FC, ReactElement, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col} from 'react-bootstrap';

import {ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import {IRouteParams} from '../../../../types/commonTypes';
import LevelSelect from '../Inputs/components/LevelSelect';
import {DefaultFinalLevel, DefaultStartingLevel} from '../../../../const/consts';
import './LevelMaterials.css'
import {Position} from '../../../../common/Popover/types';
import LevelMaterialsSummary from '../LevelMaterialsSummary';

const LevelMaterials: FC = (): ReactElement => {
  const {t} = useTranslation(['character']);
  const { name } = useParams<IRouteParams>();

  const [startingLevel, changeStartingLevel] = useState(DefaultStartingLevel)
  const [finalLevel, changeFinalLevel] = useState(DefaultFinalLevel)

  useEffect(() => {
    const finalLevelLowerThanStartingLevel = startingLevel.lvl > finalLevel.lvl ||
      ((startingLevel.lvl === finalLevel.lvl) && (startingLevel.isAscended && !finalLevel.isAscended))

    if (finalLevelLowerThanStartingLevel) {
      changeFinalLevel(startingLevel)
    }

  }, [startingLevel, finalLevel])

  useEffect(() => {
    changeStartingLevel(DefaultStartingLevel)
    changeFinalLevel(DefaultFinalLevel)
  }, [name])

  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === name)

  if (!activeCharacter) return <></>

  const lvlFrom = t('character:from_lvl', {number: startingLevel.lvl})
  const lvlTo = t('character:to_lvl', {number: finalLevel.lvl})

  return (
    <Col xs={12} className='mb-4'>
      <h4 className='my-3'>{t('character:level_up')}</h4>
      <div className='d-flex justify-content-between mx-auto level-materials__lvl-buttons flex-wrap'>
        <LevelSelect
          text={lvlFrom}
          onSelectOption={changeStartingLevel}
          levelInfo={startingLevel}
        />
        <LevelSelect
          text={lvlTo}
          position={Position.RIGHT}
          onSelectOption={changeFinalLevel}
          levelInfo={finalLevel}
          minLevel={startingLevel}
        />
      </div>

      <LevelMaterialsSummary startingLevel={startingLevel} finalLevel={finalLevel}/>
    </Col>
  )
}

export default LevelMaterials
