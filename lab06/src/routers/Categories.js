import { Outlet, useLoaderData } from "react-router-dom";
import Category from "../components/Category";
import Box from '@mui/material/Box';

export default function Catagories() {
    const categories = useLoaderData();


    return (
        <>
            {categories.map(category =>
                <Category category={category} key={category} />
            )}

        </>
    );
}