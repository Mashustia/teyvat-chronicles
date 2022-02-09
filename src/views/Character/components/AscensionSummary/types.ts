import {ICharacter} from '../../../../charactersData/types';
import {IInitialSkillLevel} from '../TalentMaterials/types';

export interface IAscensionSummary {
  characterData: ICharacter
  skillLevel: IInitialSkillLevel
  isTraveler?: boolean
}
