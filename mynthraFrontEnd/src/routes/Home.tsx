import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { itemActions } from "../store/itemSlice"
import HomeItem from '../component/HomeItem'
import { RootState } from '../store/mynthraStore'
import mynthraInterface from "../mynthraInterface"


function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/items", { signal });
        const data = await response.json();
        dispatch(itemActions.addInitialItems(data.items));
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        console.log("data fatched successfully")
      }
    };

    fetchData();

    return ()=>{
        controller.abort()
    }
  }, [])
  const items: mynthraInterface[] = useSelector((store: RootState) => store.items)

  return (
    <>
      <main>
        <div className="items-container">
          {
            items.map((item, i) => <HomeItem key={i} item={item} />)
          }
        </div>
      </main>
    </>
  )
}

export default Home