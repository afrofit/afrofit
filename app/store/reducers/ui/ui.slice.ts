import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../../store';

export interface UIState {
    dummy: string
}

const initialState: UIState = {
    dummy: "Nothing yet!"
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        someFunctionName(state, action: PayloadAction<string>) {
            state.dummy = action.payload;
        }
    }
})

export const {someFunctionName} = uiSlice.actions

export const selectUiDummy = (state: RootState) => state.ui.dummy

export default uiSlice.reducer