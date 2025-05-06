// Import components
import  {locations} from "~/constants";
import Header from "../../components/Header";
import Rent from "../../components/Rent";
import Footer from "../../components/Footer";

const Home = () => {
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
                <h1 className="text-5xl text-gray-600 font-semibold text-dark-100 flex justify-center">Chose your dream house</h1>
                    {/* Add pictures of Houses and locations*/}
                <div className="rent-card">
                    {locations.map(({id, name, imageUrl, location, tags}) => (
                        <Rent
                            key={id}
                            id={id.toString()}
                            name={name}
                            imageUrl={imageUrl[0]}
                            location={location}
                            tags={tags}
                        />
                    ))}
                </div>
            </section>
            {/*End of Rent*/}
            <Footer />
        </main>

    )
}
export default Home
