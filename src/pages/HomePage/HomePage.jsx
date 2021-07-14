import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import Container from '../../components/Container/Container'
import ProductList from '../../components/ProductList/ProductList'

import ProductForm from "../../components/ProductForm/ProductForm"
import {productsSelector} from "../../redux/products/products-selector"
import Filters from "../../components/Filters/Filters"

import styles from "./HomePage.module.css"
import { useDevice } from '../../hooks/useDevice';


const Homepage = () => {
  const { isMobileDevice, isTabletAndDesktop } = useDevice();

    const products = useSelector(productsSelector)

    const [showFilters, setShowFilters] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(99999);
    const [currency, setCurrency] = useState("UAH")
    const [filterValue, setFilterValue] = useState("fromExpensive")


    const toggleShowFilters = event => setShowFilters(!showFilters)
    

    const onMinPriceChange = event =>
        setMinPrice(event.target.value);
    
    const onMaxPriceChange = event =>
        setMaxPrice(event.target.value);
    
    const onFilterChange = (e) => setFilterValue(e.target.value)
    
    const onCurrencyChange = (e) => setCurrency(e.target.value)



    const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);

    let sortedProducts;
      switch (filterValue) {
        case "fromLow":
           sortedProducts=filteredProducts.sort((a,b)=>a.price - b.price)
              break;
        case "fromExpensive":
           sortedProducts=filteredProducts.sort((a,b)=>b.price - a.price)
            
              break;
        case "byName":
           sortedProducts=filteredProducts.sort((a,b)=>a.name > b.name ? 1 : -1)
            
            break;
    
          default:
              console.log("Invalid sort type")
            break;
    };

    const propsForFilters = {
        minPrice,
        maxPrice,
        onMinPriceChange,
        onMaxPriceChange,
        onCurrencyChange,
        onFilterChange,
        currency
    };
    

    return (
        <div className={styles.thumb}>
            <Container>
                <button className={styles.filterBtn} onClick={toggleShowFilters}>Фильтры</button>
                {showFilters && isMobileDevice && <Filters {...propsForFilters}
                />
                }
                <div className={styles.wraper} >
                    {isTabletAndDesktop && <Filters {...propsForFilters} />}
                    <div>
                        <ProductList products={sortedProducts} currency={currency} />
                   
                    </div>
                </div>
                <div>
                    <ProductForm />
                </div>
            </Container>
        </div>
    );
};

export default Homepage
