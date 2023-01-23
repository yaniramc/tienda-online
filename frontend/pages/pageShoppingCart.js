import Header from "../components/Header";
import ShoppingCart from "../components/ShoppingCart";

export default function PageShoppingCart({shoppingCart}) {
    return (
        <>
            <Header></Header>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <ShoppingCart product={shoppingCart} product_quantity={shoppingCart}/>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="background-shoppingCart">
                            <ul>
                                <li>{shoppingCart.name}</li>
                                <li>{shoppingCart.price}</li>
                            </ul>
                            <h4>Total a Pagar: {parseInt(shoppingCart)}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};



export async function getServerSideProps(context) {
    const res = await fetch('http://127.0.0.1:8000/tienda/shoppingcart/');
    const data = await res.json();

    return {
        props: {
            shoppingCart: data.results,
        },
    };
}
