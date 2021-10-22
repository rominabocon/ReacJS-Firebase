import React from 'react';
import ItemList from './ItemList';
import { firestore } from './../../firebase/firebase';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ItemListContainer = () => {
  const [productos,setProductos] = useState([])
  const {id} = useParams()

  useEffect(()=>
    {
        const db = firestore
        const coleccion = db.collection("ItemCollection")
        let consulta
        if (!id) consulta = coleccion.get()
        if (id === "1") consulta = coleccion.where("category", "==", "Torta").get()
        if (id === "2") consulta = coleccion.where("category", "==", "Cupcake").get()

        consulta
            .then(res => {
                const documento = res.docs
                let misProductos = []

                documento.forEach(producto => {
                    const consultaFinal = {
                        id: producto.id,
                        ...producto.data()
                    }
                    misProductos.push(consultaFinal)
                })
                setProductos(misProductos)
            })
            .catch(err => console.log(err))
    }, [id])

    if(productos.length === 0){
        return (
            <div className="text-center m-5">
                <Spinner className="m-3" animation="grow" size="sm" />
                <Spinner className="m-3" animation="grow" />
                <Spinner className="m-3" animation="grow" size="sm" />
                <Spinner className="m-3" animation="grow" />
                <Spinner className="m-3" animation="grow" size="sm" />
                <Spinner className="m-3" animation="grow" />
                <Spinner className="m-3" animation="grow" size="sm" />
                <Spinner className="m-3" animation="grow" />
                <Spinner className="m-3" animation="grow" size="sm" />
            </div>
        )       
    }else{
        return(
        <div className="container">
            <ItemList productos={productos} />
        </div>
        )
    }    
}
export default ItemListContainer;