import {useState} from "react"
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, paramOnAdd}) => {

    const [counter,setCounter] = useState(initial);
    
    const handleSumar = () => {
        if (counter === stock){
            return;
        }
        setCounter(counter + 1);
    }
    const handleRestar = () => {
        if (counter === 1){
            return;
        }
        setCounter(counter - 1);
    }

    return (
        <>
        <div>
            <div className="d-flex justify-content-center m-3 align-items-center">
                <Button className="handle" onClick={handleRestar}>-</Button> 
                <p className="m-2">{counter}</p> 
                <Button className="hanlde" onClick={handleSumar}>+</Button> <br />
            </div>    
            <Button variant="primary" onClick={()=>paramOnAdd(counter)}>Agregar al carrito</Button>
        </div>
        </>
    )
}

export default ItemCount;