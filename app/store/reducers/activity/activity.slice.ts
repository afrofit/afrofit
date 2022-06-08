import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../../store';

export interface ActivityState {
    dummy: string
}

const initialState: ActivityState = {
    dummy: "Nothing yet!"
}

const activitySlice = createSlice({
    name: "activity",
    initialState,
    reducers: {
        someFunctionName(state, action: PayloadAction<string>) {
            state.dummy = action.payload;
        }
    }
})

export const {someFunctionName} = activitySlice.actions

export const selectPerformanceDummy = (state: RootState) => state.activity.dummy

export default activitySlice.reducer