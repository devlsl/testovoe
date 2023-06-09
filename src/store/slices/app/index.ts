import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Lang } from 'data/locale/types'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    soundsIsOn: false,
    musicIsOn: false,
    lang: 'ru' as Lang,
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
    setLang(state, action: PayloadAction<Lang>) {
      console.log('1locale is', state.lang)
      state.lang = action.payload
      console.log('1locale is', state.lang)
    }
  }
})

export const { reducer: appReducer, actions: appActions } = appSlice
