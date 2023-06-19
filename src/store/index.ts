import {configureStore} from '@reduxjs/toolkit'
import {mainFormSlice} from "./reducers";


export const store = configureStore({
    reducer: {
        main: mainFormSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch