import { useReduce } from "../Reducer-context"
export default function Filter(){
const {dispatch,showIdealFor,showBrand,showSize} = useReduce()
const sizeArr=['S','M',"L",'XL']
const brandArr=[
    'Roadster',
    'Moda Rapido',
    'Indo Era',
    'Nayo',
    'Tiber Taber',
    'JBN Creation'
  ]

const idealArr=['Men','Women','Kids']  
    return(
        <div className="pl-1">
           <div className="flex flex-col">
            <div className="text-lg font-bold">Size</div>   

           {
               sizeArr.map(item=>{
                   return(
                    <div> <input type="checkbox" 
                    checked={showSize.includes(item)}
                    className="cursor-pointer" onChange={()=>{dispatch({type:"SIZE",payload:`${item}`})}}/> {item}</div>
                   )
               })
           }
           </div>


           <div className="flex flex-col">
            <div className="text-lg font-bold">Ideal For</div>   

           {
               idealArr.map(item=>{
                   return(
                    <div><input type="checkbox" 
                    checked={showIdealFor.includes(item)}className="cursor-pointer" onChange={()=>{dispatch({type:"IDEAL",payload:`${item}`})}}/> {item}</div>
                   )
               })
           }
           </div>


           <div>
            <div className="text-lg font-bold">Brand</div>

           {brandArr.map(item=>{
               return(
                <div><input type="checkbox" 
                checked={showBrand.includes(item)}className="cursor-pointer" onChange={()=>{dispatch({type:"Brand",payload:`${item}`})}}/> {item}</div>
               )
           })}
        </div>
        <button onClick={()=>{dispatch({type:"FILTER_RESET"})}}className="bg-black text-white br-1 p-2">Reset Filter</button>
        </div>

    )
}