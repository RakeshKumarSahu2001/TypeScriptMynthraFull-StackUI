import { createSlice,PayloadAction  } from "@reduxjs/toolkit";

const initialState:string[]=[]

const bagSlice=createSlice({
    name:"bagSlice",
    initialState,
    reducers:{
        addToBag:(state,action:PayloadAction<string> )=>{
            state.push(action.payload)
        },
        removeFromBag:(state,action)=>{
            return state.filter(itemId=>itemId!==action.payload)
        },
    }
})

export const bagAction=bagSlice.actions

export default bagSlice