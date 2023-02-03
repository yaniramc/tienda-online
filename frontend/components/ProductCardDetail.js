import {addProduct} from "./FunctionsLocalStorage";


export default function ProductCardDetail({product}) {

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img src={product.image} alt="image-product" width={500} height={350} className="my-5"/>
                    </div>
                    <div className="col-sm-12 col-md-6 my-5">
                        <h1 className="text-uppercase">{product.name}</h1>
                        <h4 className="pt-5 pb-3">{product.description}</h4>
                        <h1 className="text-danger">{product.price} €</h1>
                        <h4 className="text-success pt-2">Stock: {product.stock}</h4>
                        <form action="/pageShoppingCart" className="pb-5">
                            <label htmlFor="product_quantity" className="form-label pt-3">
                                <h4>Cantidad:</h4>
                            </label>
                            <select className="form-select"
                                    value={product.quantity}
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
                        <div className="d-grid gap-2">
                            <button type="submit" value="Submit" onClick={addProduct} className="btn btn-warning btn-lg text-white">AGREGAR AL CARRITO</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

