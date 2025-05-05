// Import components
import  {locations} from "~/constants";
import Header from "../../components/Header";
import Rent from "../../components/Rent";

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
                <h1 className="text-4xl text-gray-600 font-semibold text-dark-100 flex justify-center">Houses for sale</h1>
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

        </main>
    )
}
export default Home
