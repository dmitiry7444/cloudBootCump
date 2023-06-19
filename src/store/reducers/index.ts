import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface MainForm {
    phone: string,
    email: string
}


const initialState: MainForm = {
    phone: '',
    email: ''
}


export const mainFormSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<MainForm>) => {
            const {phone, email} = action.payload
            state = {
                phone: phone,
                email: email
            }
            return state;
        },
    }
})

export const {changeState} = mainFormSlice.actions

export default mainFormSlice.reducer