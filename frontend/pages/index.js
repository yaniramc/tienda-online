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
                            <button type="button" className="btn btn btn-lg text-white">COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-5">
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
