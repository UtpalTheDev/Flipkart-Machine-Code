import { useReduce } from "./Reducer-context"
export default function Sort(){
const {dispatch}=useReduce()
    return(
        <div>
        <input type="radio" name="sort" id="highToLow" className="cursor-pointer" onClick={()=>{dispatch({type:"SORT",payload:"PRICE_HIGH_TO_LOW"})}}/>
        <label for="highToLow">Price High To Low</label>
        
        <input type="radio" name="sort" id="lowToHigh" className="cursor-pointer" onClick={()=>{dispatch({type:"SORT",payload:"PRICE_LOW_TO_HIGH"})}}/>
        <label for="lowToHigh">Price Low To High</label>

        </div>
    )
}