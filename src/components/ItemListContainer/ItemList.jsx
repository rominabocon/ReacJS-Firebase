import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <>
        <div className="d-flex justify-content-between flex-wrap mb-5">
            {productos.map(producto =><Item 
            key={producto.id}
            id={producto.id} 
            name={producto.name}
            img={producto.img} 
            unitPrice={producto.unitPrice}/>)}
        </div>
        </>
    )
}


export default ItemList;