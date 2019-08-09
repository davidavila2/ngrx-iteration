export interface Something {
results: ShowSomething[]
}

export interface ShowSomething {
  name: string,
  height: string,
  gender: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  home_world: string
  created: string,
  edited: string,
  url: string
}

export const emptyStarwars = {
  name: '',
  height: '',
  gender: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  home_world: '',
  created: '',
  edited: '',
  url: ''
}