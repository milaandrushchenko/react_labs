function Catalog(props) {
    return (
        <div className="block">
            <div className='block_row'>
                <div className="productList">
                    <ProductList products={props.products} />
                </div>
            </div>
        </div>
    );
}

function ProductList(props) {
    return (
        props.products.map((product, index) => {
            return (
                <Product product={product} key={index} />
            );
        })
    );
}

function Product(props) {
    return (
        <div>
            <img alt={props.product.name} src={props.product.imag} />
            <h3>{props.product.name}</h3>
            <span>{props.product.price} грн.</span>
        </div>

    );
}

export default Catalog;
