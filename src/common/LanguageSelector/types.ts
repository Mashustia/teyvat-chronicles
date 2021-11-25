export interface IDropdownProps {
  languages: string[]
  activeLanguage: string
  onSelect: (language: string) => void
}
