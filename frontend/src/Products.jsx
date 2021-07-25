import Data from "./Data";
import ProductCard from "./ProductCard"
import { useReduce } from "./Reducer-context";
export default function Products(){
const {
    sortBy,
    showIdealFor,
    showSize,
    showBrand,dispatch}=useReduce();
     console.log("meeeeeee",showSize)

    function getSortedData(dataList,sortBy){
        if(sortBy==="PRICE_HIGH_TO_LOW")
        {
            return dataList.sort((a,b)=>(b.price-a.price))
        }
        if(sortBy==="PRICE_LOW_TO_HIGH")
        {
            return dataList.sort((a,b)=>(a.price-b.price))
        }
        return dataList
    }

    function getFilterData(sortedList,{
        
        showIdealFor,
        showSize,
        showBrand,  
    }){
         return sortedList.filter(items=>showIdealFor.length===0 ? true : showIdealFor.includes(items.idealFor))
         .filter(items=>showSize.length===0 ? true : showSize.includes(items.size))
         .filter(items=>showBrand.length===0 ? true : showBrand.includes(items.brand))
        
    }
  
    const sortedList=getSortedData(Data,sortBy)
    const filteredList=getFilterData(sortedList,{
        showIdealFor,
        showSize,
        showBrand,  
    })





    return(
        <div className="flex flex-wrap justify-center">
            {
                filteredList.map(item=>{
                    return(
                        <ProductCard key={item.id} product={item} />
                        
                    )
                })
            }
            
        </div>
    )
}