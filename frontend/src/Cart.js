import {useReduce} from "./Reducer-context"

export default function Cart(){
const {cart}=useReduce()
return(
    <>
    {cart.map(item=>{
        return(
            <>
            <div className="w-48 shadow-md bg-white m-2">
            <div className=""><img src={item.image}/></div>
            <div className="text-center">{item.brand}</div>
            <div className="text-gray-500 text-center text-sm">{item.type}</div>
            <div className="pl-0.5">Rs- {item.price}/-</div>
            <div className="pl-0.5">Size: {item.size}</div>
            </div>
            </>
            

        )
    })}
    </>
)

}