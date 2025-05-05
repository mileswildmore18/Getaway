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
                <h1 className="text-xl font-semibold text-dark-100">Houses for sale</h1>
                    {/* Add pictures of Houses and locations*/}
                <div className="rent-card">

            </div>
            </section>
            {/*End of Rent*/}

        </main>
    )
}
export default Home
