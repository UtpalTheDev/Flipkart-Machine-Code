export default function ProductCard({product}){

    return(
        <div className="w-48 shadow-md bg-white m-2">
            <div className=""><img src={product.image}/></div>
            <div className="text-center">{product.brand}</div>
            <div>Rs- {product.price}/-</div>
            <div>Size: {product.size}</div>
        </div>   
    )
}