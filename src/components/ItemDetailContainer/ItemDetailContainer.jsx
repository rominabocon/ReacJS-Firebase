import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestore } from "../../firebase/firebase"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        const db = firestore
        const coleccion = db.collection("ItemCollection")
        coleccion
            .get()
            .then((results) => {
                const data = results.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                // eslint-disable-next-line eqeqeq
                setProductos(data.find(res => res.id == id))                
            })
            .catch(err => console.log(err))
        },[id]); 
        
        if(productos.length === 0){
        return (
            <div className="text-center m-5">
                <div className="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )       
        }else{
            return(
                    <div className ="mb-3"> 
                    
                    <ItemDetail producto={productos}/>
                    </div>

            )
        } 
    }                
export default ItemDetailContainer

