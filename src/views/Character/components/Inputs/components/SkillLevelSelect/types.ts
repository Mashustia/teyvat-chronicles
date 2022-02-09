export interface ISkillLevelSelectProps {
  id: string
  name: string
  options: IOption[]
  value: string | number
  onChange: (name: string, id: string, value: string | number) => void
}

export interface IOption {
  text: number
  id: number
}
