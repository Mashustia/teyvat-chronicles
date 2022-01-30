import {FC, ReactElement} from 'react'
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

const LevelMaterials: FC<RouteComponentProps<IRouteParams>> = ({match: {params}}): ReactElement => {
  const {t} = useTranslation(['character', 'common']);
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const ascensionMaterials = Object.entries(activeCharacter.ascension_materials)

  const lvlFrom = t('common:from_lvl', { number: DefaultStartingLevel.lvl})
  const lvlTo = t('common:to_lvl', { number: DefaultFinalLevel.lvl})

  return (
    <Col xs={12}>
      <h4 className='mb-3'>{t('character:level')}</h4>
      <LevelSelect text={lvlFrom}/>
      <LevelSelect text={lvlTo}/>

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
