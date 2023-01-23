export default function ShoppingCart({product, product_quantity}) {
    return (
        <table className="table table-striped align-middle">
            <thead>
            <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Eliminar</th>
            </tr>
            </thead>

            <tbody className="table-group-divider">
            <tr className="align-middle">
                <td>{product.image}</td>
                <td>{product.name}</td>
                <td>

                    <div className="col-3">
                        <form action="/pageShoppingCart">
                            <label htmlFor="product_quantity" className="form-label"></label>
                            <input type="number" id="product_quantity" name={product_quantity.id}
                                   step="1" className="form-control"/>
                        </form>
                    </div>

                </td>
                <td>{product.price} €</td>
                <td>
                    <button type="button" className="btn">
                        <img src="/images/basura.png" alt="icono-basura" width={25} height={25}/>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
