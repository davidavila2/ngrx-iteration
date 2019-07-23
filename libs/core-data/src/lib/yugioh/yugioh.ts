export interface Yugioh {
card: CardDetails[]
}

export interface CardDetails {
  name: string,
  image: string,
  text: string,
  type: string,
  species: string,
  attack: string,
  defense: string,
}
