import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import bagSlice from "./bagSlice";
// import fetchStatusSlice from "./fetchStatusSlice"


const mynthraStore=configureStore({
    reducer:{
        items:itemSlice.reducer,
        // fatchStatus:fetchStatusSlice.reducer,
        bag:bagSlice.reducer
    }
})

export type RootState = ReturnType<typeof mynthraStore.getState>
export default mynthraStore