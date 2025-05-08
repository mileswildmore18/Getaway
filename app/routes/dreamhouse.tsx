import {BrowserRouter, Router, Link, Route, Routes, useParams} from "react-router";
import {addresses } from "~/constants/";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Photos from "../../components/Photos";


const Dreamhouse = () => {
    return (
        <main className="home">
            {/* Header*/}
            <Header
                title={"Gulf GetAway"}
                description={"Rent your dream home"}
            />
            {/*End of Header*/}

            {/* Rent */}
            <section className="container">
                <h1 className="text-5xl text-gray-600 font-semibold text-dark-100 flex justify-center">More photos</h1>
                {/* Add pictures of House inside and out*/}
                <div className="rent-card">
                        <Photos />

                </div>
            </section>
            {/*End of Rent*/}
            <Footer/>
        </main>
    )
}
export default Dreamhouse
