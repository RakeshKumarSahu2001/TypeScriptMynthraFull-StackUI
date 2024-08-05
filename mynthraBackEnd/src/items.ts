import fs from "fs"

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

export async function getItems() {
    try {
        const storeData = await fs.promises.readFile("src/item.json", "utf-8")
        const data = JSON.parse(storeData)
        return data.items
    }
    catch (err) {
        console.log(err)
    }
}

export async function writeItems(item:mynthraInterface) {
    try {
        const existingdata=await getItems()
        const itemJson=JSON.stringify(item)
        existingdata.push(itemJson)
        const updatedData=JSON.stringify({items:existingdata})
        console.log(existingdata)
        await fs.promises.writeFile("src/item.json", updatedData)
        return updatedData;
    } catch (err) {
        console.log(err)
    }
}

