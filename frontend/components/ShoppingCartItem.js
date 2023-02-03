export default function ShoppingCartItem({product, product_quantity}) {
    return (
        <table className="table align-middle">
            <h1>Mi cesta de la compra</h1>
            <tbody>
            <tr className="align-middle">
                <td><img className="img-thumbnail" src={product.image} alt="image-product" width={180} height={180}/></td>
                <td>{product.name}</td>
                <td>

                    <div className="col-3">
                        <form action="/pageShoppingCart">
                            <label htmlFor="product_quantity" className="form-label"></label>
                            <select className="form-select"
                                    value={product_quantity}
                                    onChange={e => setQuantity(parseInt(e.target.value))}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
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
