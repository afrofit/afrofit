import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";
import { ClassModel } from "app/types/ClassModel";


export interface ClassState {
    class?: ClassModel|null
  }

const initialState: ClassState = {
   class:null
  };
  

const contactusSlice=createSlice({
    name:"contactus",
    initialState,
    reducers:{
        setContactus(state,action:PayloadAction<any>){
            state.class=action.payload
        }
    }
})

export const {
    setContactus
}=contactusSlice.actions

export const getContactus=(state:RootState)=>
    state.class.class

export default contactusSlice.reducer