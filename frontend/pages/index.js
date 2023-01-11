import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import {useState} from "react";


export default function Home({productList}) {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const onPageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <>
            <Header></Header>

            <div className="banner-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-6">
                            <h1 className="title">Hecho a mano para tu hogar</h1>
                            <a href="#product-list" type="button" className="btn generic-button btn-lg">COMPRAR</a>
                        </div>
                    </div>
                </div>
            </div>


            <div id="product-list" className="container py-5">
                <div className="row g-5">
                    {productList.map((product, index) => {
                        return (
                            <ProductCard product={product} key={index}/>
                        )
                    })}
                </div>
            </div>


            <Footer></Footer>
        </>
    );
};


export async function getServerSideProps(context) {
    const res = await fetch('http://127.0.0.1:8000/tienda/product/');
    const data = await res.json();

    return {
        props: {
            productList: data.results
        },
    };
}
