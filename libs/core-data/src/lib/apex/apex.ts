export interface Apex {
  name: string,
  function: string,
  lore: string,
  about: CharacterInfo
  id: number,
}

export interface CharacterInfo {
  real_name: string,
  age: number,
}

export const emptyApex: Apex = {
  name: '',
  function: '',
  lore: '',
  about: { 
    real_name: '',
    age: null,
  },
  id: null
}