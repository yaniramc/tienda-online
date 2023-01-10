import Header from "../components/Header";

export default function PageShoppingCart({shoppingCart}) {
    return (
        <>
            <Header></Header>

            <div className="container">

                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        {shoppingCart.map((shoppingCartItem, index) => {
                            return (
                                <PageShoppingCart product={shoppingCartItem.productList} product_quantity={product_quantity.productList} key={index}/>
                            )
                        })}
                    </div>


                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="background-shoppingCart">

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
            shoppingCart: data.results
        },
    };
}
