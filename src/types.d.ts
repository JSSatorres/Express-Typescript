export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export interface SpecialDiaryEntry extends DiaryEntry{
  flightNumber: number
}

// El resultaado es el mismo con los dos siguientes

// eliminamos los elementos del interface que nos interesan
// export type NonSensitiveInfoDiaryEntryOmit = Omit<DiaryEntry, 'comment'>

// cogemos los elementos del interface que nos interesa
export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id'|'date'|'weather'|'visibility'>
