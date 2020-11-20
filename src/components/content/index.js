import React,{useState,useEffect} from "react";
import "../login";
import Axios from 'axios';

export default function Content(){
const[data,setData]=useState("");
const[valor,setValor]=useState("");

 
useEffect(()=>{

  Axios.get("https://api-colmena.herokuapp.com/Categorias",{
  }).then((response)=>{
     setData(response.data);
     
  });

  
},[]);
console.log(data);
console.log(valor);
  return(
<section>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="left-sidebar">
                <h2>Categorias</h2>
                <div class="panel-group category-products" id="accordian">
                  <div class="panel panel-default">
                                      
                  </div>
                  {Object.values(data).map(elemento=>(
                  <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title" >
                      <a data-toggle="collapse" data-parent="#accordian" key={elemento.Id} name={elemento.Id} href="#content" onClick={(e)=>{
                        setValor(e.target.name);
                      }}>
                        <span class="badge pull-right"><i class="fa fa-share" ></i>
                        </span>
                        {elemento.Categoria}
                      </a>
                    </h4>
                  </div>           
                  

                  </div>
                  )
                  )}
                  

                </div>
{/*catttt...*/}
                <div class="shipping text-center">
                  <img src="assets/images/home/shipping.jpg" alt="" />
                </div>
              </div>
            </div>

            <div class="col-sm-9 padding-right">
              <div class="features_items">
                <h2 class="title text-center">Nuevos Productos</h2>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart">
                          <i class="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart">
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Lista de Deseos
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Me encanta
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart">
                          <i class="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart">
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product3.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart">
                          <i class="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart">
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product4.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart">
                          <i class="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart">
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </a>
                        </div>
                      </div>
                      <img
                        src="assets/images/home/new.png"
                        class="new"
                        alt=""
                      />
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product5.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart">
                          <i class="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart">
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </a>
                        </div>
                      </div>
                      <img
                        src="assets/images/home/sale.png"
                        class="new"
                        alt=""
                      />
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product6.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart">
                          <i class="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart">
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-square"></i>Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recommended_items">
                <h2 class="title text-center">Productos Recomendados</h2>

                <div
                  id="recommended-item-carousel"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="item active">
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img
                                src="assets/images/home/recommend1.jpg"
                                alt=""
                              />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart">
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img
                                src="assets/images/home/recommend2.jpg"
                                alt=""
                              />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart">
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img
                                src="assets/images/home/recommend3.jpg"
                                alt=""
                              />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart">
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img
                                src="assets/images/home/recommend1.jpg"
                                alt=""
                              />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart">
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img
                                src="assets/images/home/recommend2.jpg"
                                alt=""
                              />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart">
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img
                                src="assets/images/home/recommend3.jpg"
                                alt=""
                              />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart">
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="left recommended-item-control"
                    href="#recommended-item-carousel"
                    data-slide="prev"
                  >
                    <i class="fa fa-angle-left"></i>
                  </a>
                  <a
                    class="right recommended-item-control"
                    href="#recommended-item-carousel"
                    data-slide="next"
                  >
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}