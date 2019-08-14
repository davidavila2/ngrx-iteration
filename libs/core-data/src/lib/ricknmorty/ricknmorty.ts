export interface Ricknmorty {
card: RicknmortyDetails[]
}

export interface RicknmortyDetails {
  id: number,
  name: string,
  image: string,
  status: string,
  gender: string,
  // origin: OriginName[];
}

export interface OriginName {
  name: string
}

export const emptyRicknmortyDetails = {
  id: null,
  name: '',
  image: '',
  status: '',
  gender: '',
  origin: ''
}
