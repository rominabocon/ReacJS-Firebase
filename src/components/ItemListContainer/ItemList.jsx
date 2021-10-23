import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <>
        <h1 className="text-center p-4 mb-0 mt-2" data-aos="flip-left" data-aos-duration="1500"><b>Nuestros Productos</b></h1>
        <div  className="d-flex justify-content-between flex-wrap mb-5">
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