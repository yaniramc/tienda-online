import Header from "../components/Header";
import ShoppingCartItem from "../components/ShoppingCartItem";

export default function PageShoppingCart({shoppingCart}) {
    return (
        <>
            <Header></Header>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        {shoppingCart.map((item, index) => (
                            <ShoppingCartItem product={item.product} product_quantity={item.product_quantity} key={index}/>
                        ))}
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                {shoppingCart.map((item, index) => (
                                    <li key={index}>
                                        <h4>{item.name}</h4>
                                        <h4>{item.price}</h4>
                                        <h4>Total a Pagar: </h4>
                                    </li>
                                ))}
                            </div>
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
