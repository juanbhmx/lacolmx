import React, { useEffect, useState } from "react";
import Checkout from '../checkout';
import '../login/style.scss';
import Axios from "axios";

const App = props => {

const ale=()=>{
  alert("En un instante se verifica los datos de la compra: Gracias!");
  window.location.href="/historialpay"
}
  return (
    <header class="masthead d-flex">
      <div class="container text-center my-auto">
        <h1 class="mb-1">Confirmar Pago</h1>
        <h3 class="mb-5">
          <em>Gracias por su preferencia!</em>
          {/*modificacion*/}
          <button
            onClick={ale}
            href="/"
            class="btn btn-danger">
            <i class="fa fa-shopping-cart">
            </i>Confirmar Compra
                            </button>


          {/*modificacion*/}

        </h3>

        {/* <a class="btn btn-primary btn-xl js-scroll-trigger" href="/">Confirmar pago</a> */}
      </div>
      <div class="overlay"></div>
    </header>
  );
}

export default App;
