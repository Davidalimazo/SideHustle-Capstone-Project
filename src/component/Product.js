import React from 'react'
import './Product.css'

import Sandwich from './Assets/Sandwich.jpeg'
import burger from './Assets/burger.jpg'
import jollof from './Assets/jollof.jpg'
import salmon from './Assets/salmon.jpeg'
import soup from './Assets/soup.jpeg'
import chicken from './Assets/chicken.jpeg'


function Product() {
  
  return (

            <div class="container">
                <div class="intro">
                    <h2 class="text-center">OUR MENU</h2>
                </div>
                <div class="row justify-content-center features">
                    <div class="col-sm-6 col-md-5 col-lg-4 item">
                        <div class="box"><img src={soup} alt=""  class
                        Name='img img-responsive'/>
                            
                            <p class="description">Continental Soup</p><p class="description">N500</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-5 col-lg-4 item">
                        <div class="box"><img src={chicken} alt=""  class
                        Name='img img-responsive'/>
                          
                             
                        <p class="description">Chicken and Chips</p><p class="description" >N2,500</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-5 col-lg-4 item">
                        <div class="box"><img src={salmon} alt=""  class
                        Name='img img-responsive'/>
                           
                             
                        <p class="description">Chilling Salmon</p><p class="description" >N1,500</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-5 col-lg-4 item">
                        <div class="box"><img src={jollof} alt=""  class
                        Name='img img-responsive'/>
                          
                        <p class="description">Jollof Rice</p><p class="description" >N1,800</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-5 col-lg-4 item">
                        <div class="box"><img src={burger} alt=""  class
                        Name='img img-responsive' />
                            
                        <p class="description">Hot Burger</p><p class="description" >N1,000</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-5 col-lg-4 item">
                        <div class="box"><img src={Sandwich} alt="" class
                        Name='img img-responsive'/>
                            
                        <p class="description">Delicious Sandwich</p><p class="description" href="#">N900</p>
                        </div>
                    </div>
                </div>
            </div>
  )
  }

export default Product;