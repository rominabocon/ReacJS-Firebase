import CartWidget from "./CartWidget";
import React from 'react';
import { Link, NavLink } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext";
import Button from 'react-bootstrap/Button';

const NavBar = () => {

    const {cart} = useCartContext();

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><img src="/media/logo.png" alt="logo" className="logo" /></Link>
                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </Button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="navCategory"><NavLink to={"/category/1"} className="nav-link"><b>Tortas</b></NavLink></li>
                        <li className="navCategory"><NavLink to={"/category/2"} className="nav-link"><b>Cupcakes</b></NavLink></li>
                    </ul>
                    <div className={cart.length === 0 ? "visually-hidden":"d-block"}>
                        <div className="d-flex justify-content-center labelCart">
                            <CartWidget/>
                            <label> <b> {cart.reduce((acc, {quantity}) => acc + quantity, 0)} </b></label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <h1 className="text-center p-4 mb-0 mt-2" data-aos="zoom-out" data-aos-duration="2000"><b>Nuestros Productos</b></h1>
        </>
    )
}

export default NavBar;

