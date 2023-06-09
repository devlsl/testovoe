import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from 'store/slices/app'
import { characterReducer } from 'store/slices/character'

export const store = configureStore({
  reducer: {
    app: appReducer,
    character: characterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
