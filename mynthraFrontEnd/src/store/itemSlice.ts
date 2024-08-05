import { createSlice } from "@reduxjs/toolkit"
import mynthraInterface from "../mynthraInterface"


const initialState:mynthraInterface[]=[]

const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers:{
        addInitialItems:(state,action)=>{
            // console.log("reducer",state,action)
            return action.payload
        }
    }
})

export const itemActions=itemSlice.actions

export default itemSlice

