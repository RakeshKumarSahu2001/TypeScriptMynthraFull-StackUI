import { useSelector } from "react-redux"
import BagItem from "../component/BagItem"
import BagSummery from "../component/BagSummery"
import { RootState } from "../store/mynthraStore"
import mynthraInterface from "../mynthraInterface"

function Bag() {
  const bagItem = useSelector((state: RootState) => state.bag)
  const items = useSelector((state: RootState) => state.items)
  const finalItem:mynthraInterface[] = items.filter((item:mynthraInterface) => {
    const itemIndex = bagItem.indexOf(item.id)
    // console.log("itemindex are",itemIndex)
    return itemIndex >= 0
  })
  return (
    <div>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {
              finalItem.map((item)=> <BagItem key={item.id} item={item} />)
            }
           
          </div>
          <BagSummery />
        </div>
      </main>
    </div>
  )
}

export default Bag