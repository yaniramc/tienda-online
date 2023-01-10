
export default function ShoppingCart({product, product_quantity}) {
    return (
        <table className="table table-striped align-middle">
            <thead>
            <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Modificar</th>
            </tr>
            </thead>

            <tbody className="table-group-divider">
            <tr className="align-middle">
                <td>{product.name}</td>
                <td>
                    <div className="row">
                        <div className="col-3">
                            <form action="/pageShoppingCart.js">
                                <label htmlFor="product_quantity" className="form-label"></label>
                                <input type="number" id="product_quantity" name={product_quantity.number}
                                       step="1" className="form-control"/>
                            </form>
                        </div>
                    </div>
                </td>
                <td>precio que no se como coño ponerlo</td>
                <td><img src="/images/basura.png" alt="icono-basura" width={25} height={25}/></td>
            </tr>
            </tbody>
        </table>
    )
}
