// import { useDispatch, useSelector } from "react-redux"
// // import { RootState } from "../store/mynthraStore"
// import { useEffect } from "react"
// import { itemActions } from "../store/itemSlice"
// // import { markFetchDone, markFetchingFinished, markFetchStarted } from "../store/fetchStatusSlice"

// function FetchItems() {
//     // const fetchStatus = useSelector((store: RootState) => store.fatchStatus)
//     const dispatch = useDispatch()
//     // console.log(fetchStatus)
//     useEffect(() => {
//         // if (fetchStatus.fetchDone === true) { return }
//         // console.log(fetchStatus)

//         const controller = new AbortController()
//         const signal = controller.signal
//         // console.log(fetchStatus)
//         const fetchData = async () => {
//             try {
//                 // dispatch(markFetchStarted());
//                 const response = await fetch("http://localhost:3000/items", { signal });
//                 const data = await response.json();
//                 dispatch(itemActions.addInitialItems(data.items));
//                 // dispatch(markFetchDone());
//             } catch (err) {
//                 console.error("Fetch error:", err);
//             } finally {
//                 // dispatch(markFetchingFinished());
//                 console.log("data fatched successfully")
//             }
//         };

//         fetchData();
//         // console.log("markFetchDone()",fetchStatus)

//         // return ()=>{
//         //     controller.abort()
//         // }
//     }, [])
//     return (<>
//         <div>
//             FetchDone :
//             Currently Fetching:
//         </div>
//     </>)
// }
// export default FetchItems