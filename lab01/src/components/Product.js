function Product(props) {
    return (
        <div className="block">
            <div className='block_row'>
                <div className="prod_block">
                    <p>I'm {props.product.name}</p>
                    <p>Price is {props.product.price} $</p>
                </div>
            </div>
        </div>
    );
}
export default Product;