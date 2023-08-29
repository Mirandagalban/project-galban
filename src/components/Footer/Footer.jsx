import React from "react";
import './footer.css' 
import { FaMapPin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
 return (
   <div>
    <footer className="pie-pagina">
      
    <div className="grupo-1">
      <div className="box">
          <figure>
             <Link to= '/'> <img  src='../public/logoCrochetComplete.png' alt="logo" /></Link>
          </figure>
      </div>
      <div className="box">
        <FaMapPin/>
          <p className="mt-2"> CABALLITO, BUENOS AIRES.</p>
      </div>
      <div className="box">
          <div className="red-social">
            <div className="link-red">
            <FaInstagram/>
            </div>
            <div className="link-red">
            <FaWhatsapp/>
            </div>
          </div>
          <div className="promociones">
        <p>suscribite para promociones!</p>
        <input  className= ' d-flex m-auto ' type="text" />
        <button className="btn btn-light btn-sm mt-2 m-auto d-flex  justify-content-center ">Enviar</button>
      </div>
      </div>
    </div>
        <div className="grupo-2">
             <small>&copy; 2023 <b>AL CROCHET CON GRACE</b> - Todos los derechos reservados. </small>
        </div>
    </footer>
   </div> 
 )
}

export default Footer;