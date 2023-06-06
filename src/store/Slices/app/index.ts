import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Locale } from '../../../data/locale/types'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    soundsIsOn: false,
    musicIsOn: false,
    locale: 'ru' as Locale,
    musicStopMethods: [] as (() => void)[],
    musicInterval: undefined as number | undefined
  },
  reducers: {
    toggleSounds(state) {
      state.soundsIsOn = !state.soundsIsOn
    },
    toggleMusic(state) {
      state.musicIsOn = !state.musicIsOn
    },
    setLocale(state, action: PayloadAction<Locale>) {
      console.log('1locale is', state.locale)
      state.locale = action.payload
      console.log('1locale is', state.locale)
    }
  }
})

export const { reducer: appReducer, actions: appActions } = appSlice
