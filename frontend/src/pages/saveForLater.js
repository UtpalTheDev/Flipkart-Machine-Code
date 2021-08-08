import {useReduce} from "../Reducer-context"
import ProductCard from "../component/ProductCard"
export default function Saveforlater(){
 const {saveLater}=useReduce()
    return(
        <div className="flex flex-wrap justify-center pb-5">
        {saveLater.length===0 && "No Items saved for later"}   

        {
        
                saveLater.map(item=>{
                    return(
                        <ProductCard product={item}/>
                    )
                })
        }
        
        </div>
    )
}