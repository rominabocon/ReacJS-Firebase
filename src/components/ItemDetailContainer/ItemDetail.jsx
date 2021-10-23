import ItemCount from "./ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { useCartContext } from './../../Context/CartContext';
import {Button, Carousel} from 'react-bootstrap';

const ItemDetail = ({producto}) => {
    const {addToCart} = useCartContext();
    const onAdd = (quantity) => {addToCart(producto, quantity)}

    return (
    <>
        <div data-aos="zoom-in-up" data-aos-duration="1700"
            className="container d-flex justify-content-end m-auto align-items-center row mt-5">
            <div className="text-center col-6">
                <div className="d-block">
                    <div>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img className="imgStyle" src={producto.img} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgStyle" src={producto.img2} alt="Second slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div>
                        <ItemCount initial={1} stock={producto.stock} paramOnAdd={onAdd} />

                    </div>
                </div>
            </div>
            <div className=" detalleCard text-center col-6">
                <div className="card-body">
                    <h3 className="card-title visually-hidden">{producto.id}</h3>
                    <h2 className="card-text text-uppercase fs-5"><b>{producto.name}</b></h2>
                    <h6 className="card-text mt-3"><b>Precio: </b>$ {producto.unitPrice}</h6>
                    <br />
                    <p className="textDetail">{producto.description}</p>
                    <div>
                        <h6>Sabores:</h6>
                        <select>
                            <option>{producto.cantidad1}</option>
                            <option>{producto.cantidad2}</option>
                        </select>
                    </div>
                </div>
                <Link to="/Cart"><Button variant="danger m-3">Ir al Carrito</Button></Link>
                <Link to="/Productos"><Button variant="dark m-3">Volver a Productos</Button></Link>
            </div>
        </div>
    </>
    )
}
export default ItemDetail