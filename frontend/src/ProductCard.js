
import {useReduce} from "./Reducer-context"
export default function ProductCard({product}){
    const {dispatch,cart}=useReduce()
    return(
        <div className="w-48 shadow-md bg-white m-2">
            <div className=""><img src={product.image}/></div>
            <div className="text-center">{product.brand}</div>
            <div className="text-gray-500 text-center text-sm">{product.type}</div>
            <div className="pl-0.5">Rs- {product.price}/-</div>
            <div className="pl-0.5">Size: {product.size}</div>
            {!cart.find(item=>{return item.id===product.id}) &&
                <button onClick={()=>
                dispatch({type:"ADD_TO_CART",payload:{...product,qty:1}})
            } className="bg-black text-white px-2">Add To Cart</button>
            }
            {cart.find(item=>{return item.id===product.id}) &&
               <div> <button onClick={()=>
                dispatch({type:"DECREASE_IN_CART",payload:product})
            } className="bg-black text-white px-2">-</button>
               {cart.find(item=>{return item.id===product.id}).qty} 
            <button onClick={()=>
                dispatch({type:"INCREASE_IN_CART",payload:product})
            } className="bg-black text-white px-2">+</button>
            </div>
            }

        </div>   
    )
}