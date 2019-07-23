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