import { useReduce } from "./Reducer-context"
export default function Filter(){
const {dispatch} = useReduce()
    return(
        <div>
           <div>
           <input type="checkbox" onChange={()=>{dispatch({type:"SIZE",payload:"S"})}}/> S
           <input type="checkbox" onChange={()=>{dispatch({type:"SIZE",payload:"M"})}}/>M 
           <input type="checkbox" onChange={()=>{dispatch({type:"SIZE",payload:"L"})}}/>L 
           <input type="checkbox" onChange={()=>{dispatch({type:"SIZE",payload:"XL"})}}/>XL
           </div>
           
        </div>

    )
}