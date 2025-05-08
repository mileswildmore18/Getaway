import {BrowserRouter, Router, Link, Route, Routes, useParams} from "react-router";
import {addresses } from "~/constants/";
import Header from "../../components/Header";
import Rent from "../../components/Rent";
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
                    {addresses.map(({id, name, imageUrls, itinerary, address, description, tags, estimatedPrice}) => (
                        <Photos
                            key={id}
                            id={id.toString()}
                            name={name}
                            imageUrls={imageUrls}
                            itinerary={itinerary}
                            description={description}
                            address={address?.toString() ?? ''}
                            tags={tags}
                            estimatedPrice={estimatedPrice}
                        />
                    ))}
                </div>
            </section>
            {/*End of Rent*/}
            <Footer/>
        </main>
    )
}
export default Dreamhouse
