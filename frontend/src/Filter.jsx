import { useReduce } from "./Reducer-context"
export default function Filter(){
const {dispatch} = useReduce()
    return(
        <div className="pl-1">
           <div className="flex flex-col">
            <div className="text-lg font-bold">Size</div>   
           <div>   
           <input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"SIZE",payload:"S"})}}/> S</div>
           <div> <input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"SIZE",payload:"M"})}}/> M </div>
           <div> <input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"SIZE",payload:"L"})}}/> L </div>
           <div> <input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"SIZE",payload:"XL"})}}/> XL</div>
           </div>


           <div className="flex flex-col">
            <div className="text-lg font-bold">Ideal For</div>   
           <div><input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"IDEAL",payload:"Men"})}}/> Men</div>

           <div><input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"IDEAL",payload:"Women"})}}/> Women</div>

           <div><input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"IDEAL",payload:"Kids"})}}/> Kids</div>
           </div>


           <div>
            <div className="text-lg font-bold">Brand</div>
           <div><input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"Brand",payload:"Roadster"})}}/> RoadSter</div>

           <div><input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"Brand",payload:"Moda Rapido"})}}/> Moda Rapido</div>

           <div><input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"Brand",payload:"Indo Era"})}}/> Indo Era</div>

           <div><input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"Brand",payload:"Nayo"})}}/> Nayo</div>

           <div><input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"Brand",payload:"Tiber Taber"})}}/> Tiber Taber</div>

           <div><input type="checkbox" className="cursor-pointer" onChange={()=>{dispatch({type:"Brand",payload:"JBN Creation"})}}/> JBN Creation</div>
           </div>

        </div>

    )
}