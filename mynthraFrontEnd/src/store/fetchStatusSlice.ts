// import { createSlice } from "@reduxjs/toolkit";


// type initialStateType = {
//     fetchDone: boolean,
//     currentlyFetching: boolean
// }

// const initialState:initialStateType= {
//     fetchDone: false,
//     currentlyFetching: false
// }

// const fetchStatusSlice = createSlice({
//     name: "fatchStatus",
//     initialState,
//     reducers: {
//         markFetchDone:(state): initialStateType => {
//             return { ...state, fetchDone: true };
//         },
//         markFetchStarted: (state): initialStateType => {
//              return {...state,currentlyFetching : true}
//         },
//         markFetchingFinished: (state): initialStateType => {
//             return {...state,currentlyFetching : false}
//         },
//     }
// })

// export const { markFetchDone, markFetchStarted, markFetchingFinished }  = fetchStatusSlice.actions;

// export default fetchStatusSlice;