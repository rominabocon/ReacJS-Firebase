import { useCartContext } from '../../Context/CartContext'
import { Link, useHistory  } from "react-router-dom"
import { firestore, TimeStamp } from "./../../firebase/firebase"
import { useState } from 'react'
import {Modal, Button, Container, Alert, Form} from "react-bootstrap";
import { useForm } from 'react-hook-form';

const Cart = () => {

  const {cart, clearCart, removeItem} = useCartContext();
  const listaDeTotales = [];
  const [ordenID, setOrdenID] = useState();
  const [ordenConfirmada, setOrdenConfirmada] = useState(false);
  const [traerFormulario, setTraerFormulario] = useState(false);
  const handleCancelar = () => setTraerFormulario(false);
  const handleTraer = () => setTraerFormulario(true);
  const {register, formState: { errors }, handleSubmit} = useForm();
  const history = useHistory()

  const crearOrden = (name,phone,email) => {
    
    const db = firestore

    const coleccion = db.collection("ordenes")

    const nuevaOrden = {
      buyer : {
        name : name,
        phone : phone,
        email : email
      },
      items : cart,
      date : TimeStamp.now(),
      total: listaDeTotales.reduce((previous, next) => previous + next)
    }

    const consulta = coleccion.add(nuevaOrden)

    consulta
      .then(resultado => {
        setOrdenID(resultado.id);
      })
      .catch(err=> {console.log(err)})
    }

    if(cart.length === 0){
      return(
        <div className="text-center m-5">
          <h2 className="m-5">¡Ups...! Este carrito esta tan vacio como tu estómago...</h2>
          <Link to={`/`}> <Button variant="primary fs-4 m-5">Ver Productos</Button></Link>
        </div>
      )
    }else{
    return(
      <>
        <Container>
        <h1 className="my-4 text-center fw-light text-decoration-underline">Detalle de su Carrito</h1>
          <hr />
        </Container>
        <div className="text-center">
            <table className="table ">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Precio Final</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
              {cart.map((producto) => {
              const total = producto.unitPrice * producto.quantity
              listaDeTotales.push(total)

              return(
                <>
                <tbody>
                <tr>
                    <th scope="row">{producto.name}</th>
                    <td>{producto.category}</td>
                    <td>{producto.quantity}{producto.key}</td>
                    <td>${producto.unitPrice}</td>
                    <td>${total}</td>
                    <td onClick={()=>removeItem(producto.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </td>
                </tr>
                    </tbody>
                    </>                                
            )})}
            </table>
            <h3 className="total text-end me-5 fs-1">Total: $ {listaDeTotales.reduce((previous, next) => previous + next)}</h3> 
            <Link to={"/"} className="btn btn-secondary fs-5 m-3">Volver al Inicio</Link>
            <Button variant="btn fs-5 btn-success m-3" onClick={handleTraer}>Confirmar Compra</Button>
            

          <Modal show={traerFormulario} onHide={handleCancelar}>
            <Modal.Header>
              <Modal.Title className="fs-3 text-center">¡Ya casi estamos!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="mb-4">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control type="text" placeholder="Nombre y Apellido" className="form-control" {...register("name", {required: "Uy! Te olvidaste..." })} />
                  {errors.name && <p className="text-danger d-block">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control type="phone" className="form-control" placeholder="15 1719 1917" {...register("phone", {required: "Uy! Te olvidaste..." })} />
                  {errors.phone && <p className="text-danger d-block">{errors.phone.message}</p>}
                </div>
                <div className="mb-4">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" className="form-control" placeholder="tucorreo@electronico.com" aria-describedby="emailHelp" {...register("email", {required: "Dato necesario para continuar" })} />
                  {errors.email && <p className="text-danger d-block">{errors.email.message}</p>}
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleCancelar}>Volver</Button>
              <Button variant="success" onClick={handleSubmit((data, e)=> {
                handleCancelar()
                crearOrden(data.name, data.phone, data.email)
                setOrdenConfirmada(true)
                })}>Completar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={ordenConfirmada} onHide={()=> setOrdenConfirmada(false)}>
            <Modal.Header closeButton onClick={()=> {
              clearCart()
              history.push("/")}}>
              <Alert variant="success" className="text-center d-flex justify-content-center">¡Tu compra se realizo con exito!</Alert>
            </Modal.Header>
            <Modal.Body>
              <p className="text-center"><b>N° de Orden:</b> {ordenID}</p> <br />
              {cart.map((cart) => {
              return (
              <ul>
                <li><b>Producto:</b> {cart.name}</li>
                <li><b>Precio por unidad:</b> $ {cart.unitPrice}</li>
                <li><b>Cantidad:</b> {cart.quantity}</li>
                <li><b>Total abonado:</b> $ {listaDeTotales.reduce((previous, next) => previous + next)}</li>
              </ul>
              )})}
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}

export default Cart;