import {FC, ReactElement, useState} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col} from 'react-bootstrap';

import {ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import Material from '../Material';
import {IRouteParams} from '../../../../types/commonTypes';
import AscensionSummary from '../AscensionSummary';
import LevelSelect from '../Inputs/components/LevelSelect';
import {DefaultFinalLevel, DefaultStartingLevel} from '../../../../const/consts';
import './LevelMaterials.css'
import {Position} from '../../../../common/Popover/types';

const LevelMaterials: FC<RouteComponentProps<IRouteParams>> = ({match: {params}}): ReactElement => {
  const {t} = useTranslation(['character']);

  const [startingLevel, changeStartingLevel] = useState(DefaultStartingLevel)
  const [finalLevel, changeFinalLevel] = useState(DefaultFinalLevel)

  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const ascensionMaterials = Object.entries(activeCharacter.ascension_materials)

  const lvlFrom = t('character:from_lvl', { number: startingLevel.lvl})
  const lvlTo = t('character:to_lvl', { number: finalLevel.lvl})

  return (
    <Col xs={12}>
      <h4 className='my-3'>{t('character:level')}</h4>
      <div className='d-flex justify-content-between mx-auto level-materials__lvl-buttons'>
        <LevelSelect text={lvlFrom} onSelectOption={changeStartingLevel}/>
        <LevelSelect text={lvlTo} position={Position.RIGHT} onSelectOption={changeFinalLevel}/>
      </div>

      <h4 className='mb-3'>{t('character:ascension_materials')}</h4>
      {ascensionMaterials.map((value, index) => {
        if (!value[0]) return null

        return <Material data={value} key={index}/>
      })}
      <AscensionSummary ascensionMaterials={activeCharacter.ascension_materials}/>
    </Col>
  )
}

export default withRouter(LevelMaterials)
