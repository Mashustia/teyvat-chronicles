import {IDungeonType} from '../Material/types';

export interface IMaterialDetailsProps extends IDungeonType {
  isAdditionalInfoShown: boolean
  toggleAdditionalInfo: (value: boolean) => void
  activeMaterial: string
}
