import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Photos from "../../components/Photos";
import NavBar from "../../components/NavBar";

const Dreamhouse = () => {
    return (

        <main className="home">
            {/* Header*/}
            <Header
                title={"Gulf GetAway"}
                description={"Call Kristen at 727-288-8354 for more details"}
            />
            {/*End of Header*/}

            {/* Navigation Bar for houses*/}
            <NavBar/>
            {/*End of Navigation Bar*/}

            {/* Rent */}
            <section className="container">
                <h1 className="text-5xl text-gray-600 font-semibold text-dark-100 text-center flex justify-center">Short Term Rentals</h1>
                {/* Add pictures of House inside and out*/}
                <div className="rent-card-item">
                    <Photos />

                </div>
            </section>
            {/*End of Rent*/}
            <Footer/>
            <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
            className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg"
            >
            ↑ Top
            </button>
        </main>

    )
}

export default Dreamhouse
