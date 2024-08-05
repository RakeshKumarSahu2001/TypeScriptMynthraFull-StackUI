type ratingType = {
    stars: number,
    count: number
  }

interface mynthraInterface{
    id: string,
    image: string,
    company: string,
    item_name: string,
    original_price: number,
    current_price: number,
    discount_percentage: number,
    return_period: number,
    delivery_date: string,
    rating: ratingType
}
export default mynthraInterface