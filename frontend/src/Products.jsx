import JsonData from "./Data.json";
import ProductCard from "./ProductCard"
import { useReduce } from "./Reducer-context";
import Sort from "./Sort"
import Filter from "./Filter"
export default function Products(){
const Data=JsonData.products
const {
    sortBy,
    showIdealFor,
    showSize,
    showBrand,dispatch,cart}=useReduce();
    console.log("cart",cart)
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
        <div className="App flex">
        <div className="w-48 position-sticky top-0 h-screen">
          <Sort/>
          <Filter/>
        </div>
        <div className="flex-grow">
        <div className="flex flex-wrap justify-center">
            {
               filteredList.length>0 ? filteredList.map(item=>{
                    return(
                        <ProductCard key={item.id} product={item} />
                        
                    )
                })
                :" No Data Present"
            }
            
        </div>
        </div>
        </div>
    )
}