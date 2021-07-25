export default function ProductCard({product}){

    return(
        <div className="w-48 shadow-md bg-white m-2">
            <div className=""><img src={product.image}/></div>
            <div className="text-center">{product.brand}</div>
            <div className="text-gray-500 text-center text-sm">{product.type}</div>
            <div className="pl-0.5">Rs- {product.price}/-</div>
            <div className="pl-0.5">Size: {product.size}</div>
        </div>   
    )
}