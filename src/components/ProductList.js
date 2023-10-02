import '../App.css';
function ProductList({product,addToCard}){
    return(
        <div className='flex'>
            {
                product.map((productItem,ProductIndex) => {
                    return(
                        <div style={{width:'50%'}}>

                            <div className='product-item'>
                                <img src={productItem.url} width="70%"/>
                                <p>{productItem.name} | {productItem.category}</p>
                                <p>{productItem.seller}</p>
                                <p> Rs. {productItem.price} /-</p>
                                <button onClick={() => addToCard(productItem)}>
                                    Add To Card</button>
                                </div>
                         
                            </div>
                    )
                })
            }

        </div>
    )
}
export default ProductList