import React, { useEffect, useState } from "react";
import Congra from '../congratulation'
import './stylecheck.css';

import Axios from "axios";
export default function Carrito() {

  const [prods, setprods] = useState("");

  useEffect(() => {
    Axios.get("https://api-colmena.herokuapp.com/Productos", {
    }).then((response) => {
      setprods(response.data);
    });
  }, []);
  console.log(prods);
  return (

    <div class="row">
      <div class="col-50">
        <div class="container">
          <h4>Carrito
        <span class="price" style={{ color: 'black' }}>
              <i class="fa fa-shopping-cart"></i>
              <b>Agregados:</b>
            </span>
          </h4>
          {Object.values(prods).map(elemento => (
            <div>
              <p>
              <span class="badge badge-pill badge-warning">()</span>
                <a href="#">{elemento.Nombre}</a> 
                <span class="price">${elemento.precio}</span></p>
            </div>
          )
          )}
          <hr />
          <p>Total <span class="price" style={{ color: 'black' }}><b>$</b></span></p>

        </div>
      </div>
      <div class="col-75">
        <div class="container">
          <form action="/congratulation">

            <div class="row">
              <div class="col-50">
                <h3>Direccion de envio</h3>
                <label for="fname"><i class="fa fa-user"></i> Nombre</label>
                <input type="text" id="fname" name="firstname" placeholder="Juan Bautista" />
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="john@uthh.edu.mx" />
                <label for="adr"><i class="fa fa-address-card-o"></i> Direccion</label>
                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                <label for="city"><i class="fa fa-institution"></i> Ciudad</label>
                <input type="text" id="city" name="city" placeholder="Huejutla de Reyes" />

                <div class="row">
                  <div class="col-50">
                    <label for="state">Estado</label>
                    <input type="text" id="state" name="state" placeholder="Hidalgo" />
                  </div>
                  <div class="col-50">
                    <label for="zip">CP</label>
                    <input type="text" id="zip" name="zip" placeholder="43000" />
                  </div>
                </div>
              </div>

              <div class="col-50">
                <h3>Pago</h3>
                <label for="fname">Tarjeta Aceptada</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                  <i class="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                  <i class="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                  <i class="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                </div>
                <label for="cname">Nombre del beneficiario</label>
                <input type="text" id="cname" name="cardname" placeholder="Juan Bautista Hernandez" />
                <label for="ccnum">Numero de la Tarjeta</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                <label for="expmonth">vence</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="Diciembre" />

                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Año</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2054" />
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                  </div>
                </div>
              </div>

            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr" />
Dirección de envío igual a la de facturación
        </label>
            <input type="submit" value="Continuar" class="btn" />

          </form>
        </div>
      </div>


    </div>
  );
}



