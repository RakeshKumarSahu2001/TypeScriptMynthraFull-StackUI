import { useSelector } from "react-redux"
import { RootState } from "../store/mynthraStore"

function BagSummery() {

    const bagItems = useSelector((state: RootState) => state.bag)
    const items = useSelector((state: RootState) => state.items)
    const finalItem = items.filter((item) => {
      const itemIndex = bagItems.indexOf(item.id)
      console.log("itemindex are",itemIndex)
      return itemIndex >= 0
    })
    const convenienceFees = 99
    let totalItem = bagItems.length
    let totalMRP = 0
    let totalDiscount = 0
    let finalPayment = totalMRP - totalDiscount + convenienceFees
    finalItem.forEach((item)=>{
        totalMRP+=item.original_price
        totalDiscount+=item.original_price-item.current_price
    })

    return (

        <div className="bag-summary">
            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹{convenienceFees}</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </div>

    )
}

export default BagSummery