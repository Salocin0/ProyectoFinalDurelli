const CarritoDetalle = ({producto}) => {
    return (
        <div> {producto.cantidad} X {producto.title}</div>
    )
}

export default CarritoDetalle