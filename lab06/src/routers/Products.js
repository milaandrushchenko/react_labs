import { Outlet, useSearchParams, useLoaderData } from "react-router-dom";
import Product from "../components/Product/Product";
import { useEffect, useState } from 'react';
import { Input, Button } from '@mui/material';

export default function Products() {
    const products = useLoaderData().products;

    let [productData, setProductData] = useState(null);
    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get("q");

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        let formData = new FormData(e.currentTarget);
        let search = formData.get("q");

        if (!search) {
            setProductData(null)
            return;
        }
        setSearchParams({ q: search });

    }

    useEffect(() => {

        const searchForProduct = async () => {
            const response = await fetch(
                `https://dummyjson.com/products/search?q=${q}`
            );
            const data = await response.json();
            setProductData(data.products);
        }
        if (q) {
            searchForProduct();
        }

    }, [q])



    return (
        <>
            <form style={{ width: '100%', textAlign: 'center' }} onSubmit={handleSubmit}>
                <label>
                    <Input defaultValue={q ?? undefined} type="text" name="q" />
                </label>
                <Button type="submit">Пошук</Button>
            </form>
            {
                productData ?
                    productData.map(product =>
                        <Product product={product} key={product.id} />
                    ) :
                    products.map(product =>
                        <Product product={product} key={product.id} />
                    )
            }</>
    );
}