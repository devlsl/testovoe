import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from 'slices/app'
import { characterReducer } from 'slices/character'

export const globalStore = configureStore({
  reducer: {
    app: appReducer,
    character: characterReducer
  }
})

export type RootState = ReturnType<typeof globalStore.getState>
export type AppDispatch = typeof globalStore.dispatch
