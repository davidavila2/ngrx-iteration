export interface Apexx {
  name: string,
  function: string,
  lore: string,
  about: CharacterInfo[]
}

export interface CharacterInfo {
  real_name: string,
  age: number,
}

export const emptyApex = {
  name: '',
  function: '',
  lore: '',
}