import {FC, ReactElement, ReactNode} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Col} from 'react-bootstrap';

import {IAscensionMaterials, ICharacter} from '../../../../charactersData/types';
import CHARACTERS from '../../../../charactersData';
import Material from '../Material';
import {IRouteParams} from '../../../../types/commonTypes';
import AscensionSummary from '../AscensionSummary';
import {Character} from '../../../../const/consts';

const TalentMaterials: FC<RouteComponentProps<IRouteParams>> = ({match: {params}}): ReactElement => {
  const {t} = useTranslation(['character', 'common']);
  const activeCharacter = CHARACTERS.find((character: ICharacter) => character.name === params.name)

  if (!activeCharacter) return <></>

  const renderMaterials = (talentInfo: IAscensionMaterials | undefined) => {
    if (!talentInfo) return null

    const materials = talentInfo ? Object.entries(talentInfo) : []

    return (
      <>
        {materials.map((value, index) => {
          if (!value[0]) return null

          return <Material data={value} key={index}/>
        })}
        {talentInfo && <AscensionSummary ascensionMaterials={talentInfo}/>}
      </>
    )
  }

  const renderOtherCharactersTalentMaterials = (): ReactNode => activeCharacter?.talent_materials && (
    <Col xs={12}>
      <h4 className='mb-3'>{t('character:talents_enhancement')}</h4>
      {renderMaterials(activeCharacter?.talent_materials)}
    </Col>
  )

  const renderTravelerTalentMaterials = (): ReactElement => (
    <Col xs={12}>
      <h4 className='mb-3'>{t('character:talents_enhancement')}</h4>

      <h5 className='my-3'>{t('common:attack')}</h5>
      {renderMaterials(activeCharacter.attack)}

      <h5 className='my-4'>{t('common:elemental_skill')}</h5>
      {renderMaterials(activeCharacter.elemental_skill)}

      <h5 className='my-4'>{t('common:elemental_burst')}</h5>
      {renderMaterials(activeCharacter.elemental_burst)}
    </Col>
  )

  const renderTalentMaterials = (): ReactNode => {
    if (activeCharacter.name === Character.TRAVELER) return renderTravelerTalentMaterials()

    return renderOtherCharactersTalentMaterials()
  }

  return <>{renderTalentMaterials()}</>
}

export default withRouter(TalentMaterials)
