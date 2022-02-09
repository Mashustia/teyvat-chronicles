const transFunc = (arg: string): string => arg

export const Language = {
  en: transFunc('language:en'),
  ru: transFunc('language:ru')
}

export const Skill = {
  attack: transFunc('character:attack'),
  elemental_skill: transFunc('character:elemental_skill'),
  elemental_burst: transFunc('character:elemental_burst'),
}

