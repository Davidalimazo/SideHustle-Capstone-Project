
import React from 'react'
import './Product.css'

import Friedrice from '../Images/friedrice.jpg'
import Chicken from '../Images/chicken.jpg'
import Jollofrice from '../Images/Jollof_Rice.jpg'
import Amala from '../Images/Amala.jpg'
import Egusi from '../Images/egusi.jpg'
import turkey from '../Images/turkey.jpg'


function Product() {
  
  return (
    <div className=' container product'>
      <h1 className='pro-header'>Our Menu:</h1>
      <div className='container'>
    <div className='row'>
      <div className='col-md-4 prod-body' >
        <img src={Friedrice}  className='product-img' alt='product-images'/>
        <h3 className='text-center'>Nigerian Fried Rice</h3>
        <p className='text-center'> N1500 </p>
        
      </div>
      <div className='col-md-4 prod-body'>
        <img src={Chicken}  className='product-img' alt='product-images'/>
        <h3 className='text-center'>Fried Chicken</h3>
        <p className='text-center'> N1200 </p>

      </div>
      <div className='col-md-4 prod-body'>
        <img src={Jollofrice}  className='product-img' alt='product-images'/>
        <h3 className='text-center'>Nigerian Jollof Rice</h3>
        <p className='text-center'> N1500 </p>

      </div>
      <div className='col-md-4 prod-body'>
        <img src={Amala}  className='product-img' alt='product-images'/>
        <h3 className='text-center'>Amala</h3>
        <p className='text-center'> N500 </p>

      </div>
      <div className='col-md-4 prod-body'>
        <img src={Egusi}  className='product-img' alt='product-images'/>
        <h3 className='text-center'>Egusi and Meat</h3>
        <p className='text-center'> N1000 </p>

      </div>
      <div className='col-md-4 prod-body'>
        <img src={turkey}  className='product-img' alt='product-images'/>
        <h3 className='text-center'>Fried Turkey</h3>
        <p className='text-center'> N1500 </p>

      </div>
    </div>
    </div>
    </div>
  )
  }

export default Product;
