import { useState } from 'react';
import './ProductForm.css'
function ProductForm(props){

    // const [fullProductInput, setFullProductInput] = useState({
    //     title:'',
    //     date:''
    // });

    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('');
    function titleChangeHandler(event){
        setTitle(event.target.value);
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
    }
    function submitHandler(e){
        e.preventDefault();
        const productData = {
            title : newTitle,
            date : newDate
        };
        console.log("Im inside a ProductForm");

        props.onSaveProduct(productData);


        setTitle('');
        setDate('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-product_controls'>
                <div className='new-product_control'>
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-product_control'>
                    <label>Date</label>
                    <input type='date' min='2024-01-01' value={newDate} max='2024-12-12' onChange={dateChangeHandler}></input>
                </div>
                <div className='new-product_button'>
                    <button type='submit'>Add Product</button>
                </div>
            </div>
        </form>
    )
}
export default ProductForm;