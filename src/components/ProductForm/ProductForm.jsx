import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToProductSuccess } from '../../redux/products/products-actions';
import { v4 as uuidv4 } from 'uuid';
import styles from "./ProductForm.module.css"



const toDataUrl = element => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
};

const initialState = {
    id: uuidv4(),
    name: '',
    price: '',
    image: '',
    description: '',
};

const ProductForm = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState(initialState);
    
    const onHandleChange = e => {
        if (e.target.type === 'file') {
            toDataUrl(e.target).then(avatar => setState(prevState => ({ ...prevState, avatar })));
            return;
        }
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    
    const onHandleSubmit = e => {
        e.preventDefault();
        dispatch(addToProductSuccess(state))
        setState(initialState)
    };

    return (
        <div className={styles.wraper}>
            <form onSubmit={onHandleSubmit} className={styles.form}>
                <div>

                    <label className={styles.label}>
                        Имя:
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            onChange={onHandleChange}
                            value={state.name}
                            placeholder="Name"
                            required
                        />
                    </label>
                    <label className={styles.label}>
                        Цена:
                        <input
                            className={styles.input}
                            type="number"
                            name="price"
                            placeholder="1000"
                          
                            onChange={onHandleChange}
                            value={state.price}
                            required
                        />
                    </label>
                    <label htmlFor="file" className={styles.label}>
                        Изображение:
                        <input
                            type="file"
                            id="file"
                            name="image"
                            className={styles.inputfile}
                            onChange={onHandleChange}
                            required
                        
                        />
                    </label>
                </div>
                <div>

                    <label>
                        <textarea
                            className={styles.textarea}
                            placeholder="Описание товара"
                            type="text"
                            name="description"
                            onChange={onHandleChange}
                            value={state.description}
                            required
                        />
                    </label>
                    <button type="submit" className={styles.submitBtn}>
                        Add product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm
