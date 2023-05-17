import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";
import { ClassModel } from "app/types/ClassModel";


export interface ClassState {
    class?: ClassModel|null
  }

const initialState: ClassState = {
   class:null
  };
  

const classSlice=createSlice({
    name:"class",
    initialState,
    reducers:{
        setAllClass(state,action:PayloadAction<any>){
            state.class=action.payload
        }
    }
})

export const {
    setAllClass
}=classSlice.actions

export const getAllClasses=(state:RootState)=>
    state.class.class

export default classSlice.reducer