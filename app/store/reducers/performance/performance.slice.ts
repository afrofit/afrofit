import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../../store';

export interface PerformanceState {
    dummy: string
}

const initialState: PerformanceState = {
    dummy: "Nothing yet!"
}

const performanceSlice = createSlice({
    name: "performance",
    initialState,
    reducers: {
        someFunctionName(state, action: PayloadAction<string>) {
            state.dummy = action.payload;
        }
    }
})

export const {someFunctionName} = performanceSlice.actions

export const selectPerformanceDummy = (state: RootState) => state.performance.dummy

export default performanceSlice.reducer