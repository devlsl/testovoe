import { createSlice } from '@reduxjs/toolkit';
const appSlice = createSlice({
    name: 'app',
    initialState: {
        soundsIsOn: false,
        musicIsOn: false,
        lang: 'ru',
        musicStopMethods: [],
        musicInterval: undefined
    },
    reducers: {
        toggleSounds(state) {
            state.soundsIsOn = !state.soundsIsOn;
        },
        toggleMusic(state) {
            state.musicIsOn = !state.musicIsOn;
        },
        setLang(state, action) {
            console.log('1locale is', state.lang);
            state.lang = action.payload;
            console.log('1locale is', state.lang);
        }
    }
});
export const { reducer: appReducer, actions: appActions } = appSlice;
