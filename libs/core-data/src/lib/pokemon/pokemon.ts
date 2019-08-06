export interface PokeResource {
  results: Pokemon[]
}

export interface Pokemon {
  name: string,
  url: string
}

export interface PokeDetails {
  name: string,
  id: number,
  sprites: PokeImg
}

export interface PokeImg {
  front_default: string
}

export const emptyPokemon = {
  id: null,
  name: '',
}