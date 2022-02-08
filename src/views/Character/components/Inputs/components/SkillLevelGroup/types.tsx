import {IInitialSkillLevel} from '../../../TalentMaterials/types';

export interface ISkillLevelGroupProps {
  skillLevel: IInitialSkillLevel
  onChangeLevel: (name: string | number, id: string, value: string | number) => void
  onReset: (id: string) => void
}
