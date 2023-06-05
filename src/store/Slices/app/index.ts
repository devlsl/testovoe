import { createSlice } from '@reduxjs/toolkit'
import { playBackMusic } from '../../../utils/playBackMusic'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    sounds: false,
    music: false,
    musicInterval: undefined as number | undefined
  },
  reducers: {
    toggleSounds(state) {
      state.sounds = !state.sounds
    },
    toggleMusic(state) {
      state.music = !state.music
      if (state.music) {
        state.musicInterval = playBackMusic()
      } else {
        clearInterval(state.musicInterval)
      }
    }
  }
})

export const { reducer: appReducer, actions: appActions } = appSlice
