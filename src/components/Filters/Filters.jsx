import React from 'react'
import styles from "./Filters.module.css"


const Filters = (props) => {


    const { minPrice,
        maxPrice,
        onMinPriceChange,
        onMaxPriceChange,
        onCurrencyChange,
        onFilterChange,
    currency} = props
    
    const currencyClassesUSD = [styles.currencyUSD];
    const currencyClassesUAH = [styles.currencyUAH];
    if (currency === "UAH") {
        currencyClassesUAH.push(styles.active)
    }
     if (currency === "USD") {
        currencyClassesUSD.push(styles.active)
    }

    
    return (
        <div className={styles.wraper}>
            <div>
                <h4 className={styles.title}>Цена</h4>
                <div className={styles.priceWrapper}>
                    <label className={styles.label}>
                        От:
                        <input
                            type="number"
                            min={0}
                            max={maxPrice}
                            name="minPrice"
                            onChange={onMinPriceChange}
                            className={styles.input}
                            aria-label="min price"
                            value={minPrice}
                        />
                    </label>
                    <label className={styles.label}>
                        До:
                        <input
                            type="number"
                            min={minPrice}
                            max={99999}
                            name="maxPrice"
                            onChange={onMaxPriceChange}
                            className={styles.input}
                            aria-label="max price"
                            value={maxPrice}
                        />
                    </label>
                </div>

            </div>
            <div className={styles.thumb}>
                <h4 className={styles.title}>Валюта</h4>
                <form onChange={onCurrencyChange}>
                    <label className={currencyClassesUSD.join(" ")}>
                        <input type="radio" name="currency" value="USD" className={styles.currency} />
                        USD
                    </label>
                    <label className={currencyClassesUAH.join(" ")}>
                        <input type="radio" name="currency" value="UAH" className={styles.currency} />
                        UAH
                    </label>
                </form>
            </div>
            <div className={styles.thumb}>
                <h4 className={styles.title}>Сортировка</h4>
                <form onChange={onFilterChange}>
                    <label className={styles.sortLabel}>
                        <input type="radio" name="sort" value="fromLow" className={styles.sortInput} />
                        По возрастанию цены
                    </label>
                    <label className={styles.sortLabel}>
                        <input type="radio" name="sort" value="fromExpensive" className={styles.sortInput} />
                        По убыванию цены
                    </label>
                    <label className={styles.sortLabel}>
                        <input type="radio" name="sort" value="byName" className={styles.sortInput} />
                        По алфавиту
                    </label>
                </form>

            </div>
        </div>
    );
};

export default Filters
