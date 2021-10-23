import React from 'react';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

const paginaInicio = () => {
        return (
            <div className="paginaInicial text-center">
                <div>
                    <img src="media/bgimg.jpg" className="img-fluid mb-3" alt="Bakery"  />
                </div>
                <div>
                    <h1 className="mb-4">
                        ¡Bienvenide a mi página!</h1>
                    <p>Soy Roxana, una repostera independiente, autodidacta, que descubrio en la reposteria una manera de dar amor y felicidad a los demás.</p>
                    <p>¡Te invito a que conoscas mis productos!</p>
                    <Link to="/Productos"><Button variant="info m-3">Ver Productos</Button></Link>  
                </div>
            </div>
        )       
}
export default paginaInicio;