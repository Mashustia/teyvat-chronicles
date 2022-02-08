export interface ISkillLevelSelectProps {
  id: string
  name?: string | number
  options: IOption[]
}

export interface IOption {
  text: number
  id: number
}
