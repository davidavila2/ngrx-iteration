export interface AmiiboResults {
  amiibo: Amiibo[];
}

export interface Amiibo {
  amiiboSeries: string,
  character: string,
  gameSeries: string,
  image: string,
  name: string
}

export const emptyAmiibo = {
  amiiboSeries: '',
  character: '',
  gameSeries: '',
  image: '',
  name: ''
}