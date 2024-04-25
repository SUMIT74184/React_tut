import React, { useState } from "react";
// import react from '@vitejs/plugin-react'
import './ProductForm'

function productForm(props){

  const [fullProductInput,setfullProductInput]=useState({
    title:'',
    date:''
  });


  // value and the function are used inside the usstate
  const [title,setTitle]=useState('');
  const [date,setDate]=useState('');

  // function titleChangeHandler(event,prevState){
  //   let obj={...prevState,title:event.target.value};
  //   console.log(obj);
  //   return obj;
  // }

  function titleChangeHandler(event){
   
    setTitle(event.target.value);//calling of setters
   
    //  console.log(event.target.value);
  }
    
  // }

  function dateChangeHandler(event){
    setDate(event.target.value);
    // console.log(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();

    const productData={
      title:title,//upar wala hi hain tension mat le
      date:date
    };
    // console.log(productData);
    props.onSaveProduct(productData);

    setTitle('');
    setDate('');
  }



  return(
    <form onSubmit={submitHandler}>
      <div className='new-product_title'>
        <label>Title</label>
        <input type='text' value={title}onChange={titleChangeHandler}></input>
      </div>

      <div className='new-product_date'>
        <label>Date</label>
        <input type='date' value={date}onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
      </div>

      <div className='new-product_button'>
        <button type='submit'>
          AddProduct

        </button>
      </div>
    </form>
  )
}

export default productForm;