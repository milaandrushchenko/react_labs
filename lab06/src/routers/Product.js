import { useLoaderData } from "react-router-dom";
import ProductReview from "../components/Product/ProductReview";

export default function Product() {

    const product = useLoaderData();

    return (
        <>
            <ProductReview product={product} />
        </>
    );
}