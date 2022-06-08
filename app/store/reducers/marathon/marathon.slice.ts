import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../../store';

export interface MarathonState {
    dummy: string
}

const initialState: MarathonState = {
    dummy: "Nothing yet!"
}

const marathonSlice = createSlice({
    name: "marathon",
    initialState,
    reducers: {
        someFunctionName(state, action: PayloadAction<string>) {
            state.dummy = action.payload;
        }
    }
})

export const {someFunctionName} = marathonSlice.actions

export const selectPerformanceDummy = (state: RootState) => state.marathon.dummy

export default marathonSlice.reducer