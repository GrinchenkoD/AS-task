import React from 'react'
import placeholder from "../../images/placeholder.png"
import styles from "./ProductList.module.css"
import { useDispatch } from 'react-redux';
import {addToFavoriteSuccess, deleteFromFavoriteSuccess} from "../../redux/favorite/favorite-actions.js"


const ProductList = ({ products, currency }) => {

const dispatch = useDispatch()

    const currencyRate = 27.2;
    
    const addToFavorites = event => {
        const { id } = event.currentTarget.closest('[data-id]').dataset;
        const favoriteProduct = products.find(product => {
        //    console.log("productID:", product.id , "ID:", id)
            return product.id === id
        });
        // console.log(favoriteProduct)
        dispatch(addToFavoriteSuccess(favoriteProduct));
    }

    const removeFromFavorites = event => {
        const { id } = event.currentTarget.closest('[data-id]').dataset;
        const favoriteProduct = products.find(product => product.id === id);
        dispatch(deleteFromFavoriteSuccess(favoriteProduct));


        
    }

    return (
        <ul className={styles.list}> {products.map(product =>
            <li className={styles.item} key={product.id} data-id={product.id}>
                {/* <img src={product.image || placeholder} alt="product photo" /> */}
                <img className={styles.photo} src={placeholder} alt="product_photo" />

                <div className={styles.thumb}>
                    <h3 className ={styles.name}>{product.name}</h3>
                    <p className={styles.price}>{currency==="UAH"? product.price: parseInt(product.price/currencyRate)} {currency }</p>
                </div>
                <div className={styles.overlay}>
                    <button onClick={product.favorite ? removeFromFavorites : addToFavorites}
                        className={product.favorite? styles.favoriteBtn : styles.Btn }>Add to favorite </button>
                    <p className={styles.description}>{product.description}</p>
                </div>
            </li>
        )}
        </ul>
    );
};

export default ProductList
