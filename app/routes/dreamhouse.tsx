import {BrowserRouter, Router, Link, Route, Routes, useParams} from "react-router";
import {addresses } from "~/constants/";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Photos from "../../components/Photos";
import DreamHouseId from "./id/DreamHouseId";
import NavBar from "../../components/NavBar";

const Dreamhouse = () => {
    return (
        <main className="home">
            {/* Header*/}
            <Header
                title={"Gulf GetAway"}
                description={"Please call for current rates"}
            />
            {/*End of Header*/}

            {/* Navigation Bar for houses*/}
            <NavBar />
            {/*End of Navigation Bar*/}

            {/* Rent */}
            <section className="container">
                <h1 className="text-5xl text-gray-600 font-semibold text-dark-100 flex justify-center">More photos</h1>
                {/* Add pictures of House inside and out*/}
                <div className="rent-card-item">
                        <Photos />

                </div>
            </section>
            {/*End of Rent*/}
            <Footer/>
        </main>
    )
}
export default Dreamhouse
