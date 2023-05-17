import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";
import { PlayedStoryType } from "app/types/StoryModel";
import { UserModel } from "app/types/UserModel";


export interface UserState {
  userData:UserModel | {}
}
  
const initialState: UserState = {
   userData: {}
};

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserData(state,action:PayloadAction<UserModel>){
            state.userData=action.payload
        }
    }
})

export const {
    setUserData
  } = userSlice.actions;
  
  export const updateUser=(state:RootState)=>
    state.user.userData

  export default userSlice.reducer