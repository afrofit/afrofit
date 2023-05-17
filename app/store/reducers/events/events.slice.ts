import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";
import { EventModel } from "app/types/EventModel";


export interface EventsState {
    events?: EventModel|null

  }
  

const initialState: EventsState = {
   events:null
  };
  

const eventSlice=createSlice({
    name:"events",
    initialState,
    reducers:{
        setAllEvents(state,action:PayloadAction<any>){
            state.events=action.payload
        }
    }
})

export const {
    setAllEvents
}=eventSlice.actions

export const getAllEvents=(state:RootState)=>
    state.event.events


export default eventSlice.reducer