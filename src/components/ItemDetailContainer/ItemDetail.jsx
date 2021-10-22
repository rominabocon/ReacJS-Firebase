import ItemCount from "./ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { useCartContext } from './../../Context/CartContext';
import {Button, Carousel} from 'react-bootstrap';

const ItemDetail = ({producto}) => {
    const {addToCart} = useCartContext();
    const onAdd = (quantity) => {addToCart(producto, quantity)}

    return (
    <>
        <div producto-aos="fade-up" producto-aos-duration="3000"
            className="container d-flex justify-content-end m-auto align-items-center row mb-5">
            <div className="text-center col-6">
                <div className="d-block">
                    <div>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img className="imgDetail" src={producto.img} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgDetail" src={producto.img} alt="Second slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div>
                        <ItemCount initial={1} stock={producto.stock} paramOnAdd={onAdd} />
                        <Link to="/"><Button variant="dark m-3">Volver al Inicio</Button></Link>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card-body">
                    <h5 className="card-title visually-hidden">{producto.id}</h5>
                    <h2 className="card-text text-uppercase fs-5"><b>{producto.name}</b></h2>
                    <h6 className="card-text mt-3"><b>PRECIO: </b>$ {producto.unitPrice}</h6>
                    <br />
                    <p className="textDetail">{producto.description}</p>
                    <div>
                        <h6>Porciones:</h6>
                        <select>
                            <option>{producto.cantidad1}</option>
                            <option>{producto.cantidad2}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default ItemDetail