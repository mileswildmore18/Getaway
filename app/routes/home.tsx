// Import components
import  {locations} from "~/constants";
import Header from "../../components/Header";
import Rent from "../../components/Rent";
import Footer from "../../components/Footer";
import NavBarHome from "../../components/NavBarHome";

const Home = () => {
    return (
        <main className="home">
            {/* Header*/}
            <Header
                title={"Gulf GetAway"}
                description={"Call Kristen Joy at 727-288-8354 for more details"}
            />
            {/*End of Header*/}

            <NavBarHome />

            {/* Rent */}
            <section className="container">
                <h1
                    className="text-5xl text-gray-600 font-semibold text-dark-100 flex justify-center text-center hover:text-blue-400"><a href="/dreamhouse">Choose your dream house</a></h1>
                    {/* Add pictures of Houses and locations*/}
                <div className="rent-card">
                    {locations.map(({id, name, imageUrl, location, tags}) => (
                        <div key={id} id={`location-${id}`} className="rent-card-item">
                        <Rent
                            key={id}
                            id={id}
                            name={name}
                            imageUrl={imageUrl[0]}
                            location={location}
                            tags={tags}
                        />
                    </div>
                    ))}
                </div>
            </section>
            {/*End of Rent*/}
            <Footer />
        </main>

    )
}
export default Home
