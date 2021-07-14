import React from 'react'
import placeholder from "../../images/placeholder.png"
import styles from "./ProductList.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteSuccess, deleteFromFavoriteSuccess } from "../../redux/favorite/favorite-actions.js"
import { favoriteSelector } from '../../redux/favorite/favorite-selector';

 

const ProductList = ({ products, currency="UAH" }) => {

    const dispatch = useDispatch();
    const favorites = useSelector(favoriteSelector);

    const currencyRate = 27.2;

  
    
    const addToFavorites = event => {
        const { id } = event.currentTarget.closest('[data-id]').dataset;
        const favoriteProduct = products.find(product => {
            return product.id === id
        });
        const result = { ...favoriteProduct, favorite: true }

        dispatch(addToFavoriteSuccess(result));
        
        const alreadyFavorite = favorites.some((product) => product.id === id);
    if (alreadyFavorite) {
      return ;
        };


    localStorage.setItem("favorites", JSON.stringify([result, ...favorites]));
        
    }

    const removeFromFavorites = event => {
        const { id } = event.currentTarget.closest('[data-id]').dataset;
        const favoriteProduct = products.find(product => product.id === id);
                const result={...favoriteProduct, favorite:false}
        dispatch(deleteFromFavoriteSuccess(result));


        
    }

    return (
        <ul className={styles.list}> {products.map(product =>
            <li className={styles.item} key={product.id} data-id={product.id}>
                {/* <img src={product.image || placeholder} alt="product photo" /> */}
                <img className={styles.photo} src={placeholder} alt="product_photo" />

                <div className={styles.thumb}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.price}>{currency === "UAH" ? product.price : parseInt(product.price / currencyRate)} {currency}</p>
                </div>
                <div className={styles.overlay}>
                    <button onClick={product.favorite ? removeFromFavorites : addToFavorites}
                        className={product.favorite ? styles.favoriteBtn : styles.Btn}>
                        {product.favorite ? "Remove from favorites" : "Add to favorites"} </button>
                    <p className={styles.description}>{product.description}</p>
                </div>
            </li>
        )}
        </ul>
    );
};

export default ProductList
