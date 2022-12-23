import * as React from 'react';
import { NavLink } from "react-router-dom";
import styles from './index.module.css'


export default function Product({ product }) {


    return (
        <div className={styles['product-card']}>
            <div className={styles['product-tumb']}>
                <img src={product.thumbnail} alt="" />
            </div>
            <div className={styles['product-details']}>
                <h4><NavLink to={`/products/${product.id}`}>{product.title}</NavLink></h4>
                <p>{product.description}</p>
                <div className={styles['product-bottom-details']}>
                    <div className={styles['product-price']}>${product.price}</div>
                </div>
            </div>
        </div>
    );
}



