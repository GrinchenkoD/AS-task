import React from 'react'
import { useSelector } from 'react-redux'
import ProductList from '../../components/ProductList/ProductList'
import {favoriteSelector} from '../../redux/favorite/favorite-selector'


const FavoritePage = () => {
    const favoriteProducts=useSelector(favoriteSelector)

    return (
        <ProductList products={ favoriteProducts}/>
            
    )
}

export default FavoritePage
