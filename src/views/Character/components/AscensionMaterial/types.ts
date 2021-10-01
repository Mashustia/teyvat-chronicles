import {IMaterial} from '../../../../charactersData/types';

export type ITableItemProps = {
  data: [string, IMaterial[]]
  imageFolderName: ImageFolderFame
}

export enum ImageFolderFame {
  ascension_materials = 'ascensionMaterials',
  talent_materials = 'talentMaterials'
}
