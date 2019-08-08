export interface Marvel {
  data: Marvelresults[]
}

export interface Marvelresults {
  results: MarvelCharacters[]
}

export interface MarvelCharacters {
  id: number,
  name: string,
  description: string,
  thumbnail: string
}

export const emptyMarvel = {
  id: 0,
  name: '',
  description: '',
  thumbnail: '',
}