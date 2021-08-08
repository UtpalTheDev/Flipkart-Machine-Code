import {useReduce} from "../Reducer-context"

export default function Cart(){
const {cart,dispatch}=useReduce()
console.log("cart--",cart)
return(
    <div className="flex flex-wrap justify-center pb-5">
     {cart.length===0 && "No Items Present in Cart"}   
    {cart.map(item=>{
        return(
            <>
            <div className="relative w-48 shadow-md bg-white m-2">
            <div className=""><img src={item.image}/></div>
            <div className="text-center">{item.brand}</div>
            <div className="text-gray-500 text-center text-sm">{item.type}</div>
            <div className="pl-0.5">Rs- {item.price}/-</div>
            <div className="pl-0.5">Size: {item.size}</div>
            {
                <div> 
                    <button onClick={()=>
                        dispatch({type:"DECREASE_IN_CART",payload:item})
                    } className="bg-black text-white px-2 mx-2">-</button>
                    {item.qty} 
                    <button onClick={()=>
                        dispatch({type:"INCREASE_IN_CART",payload:item})
                    } className="bg-black text-white px-2 mx-2">+</button>
                </div>
            }
            <div className="absolute top-1 right-2 bg-white px-2 cursor-pointer" onClick={()=>{dispatch({type:'REMOVE_ITEMS',payload:item})}}>
                X
            </div>
            </div>


            </>
            

        )
    })}
    {
        cart.length>0
        && 
        <div className="fixed bottom-0 right-0 bg-white w-full">
       Total Price- 
       {
         cart.reduce((acc,cur)=>{
              acc=acc+cur.price*cur.qty
            return acc
            },0)
       } Rs
    </div>

    }
    
    </div>
)

}