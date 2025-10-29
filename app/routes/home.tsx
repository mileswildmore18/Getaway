// Import components
import {locations} from "~/constants";
import Header from "../../components/Header";
import Rent from "../../components/Rent";
import Footer from "../../components/Footer";
import NavBarHome from "../../components/NavBarHome";

//group locations by city
const groupLocationsByCity = (locations: typeof locations ) => {
    return locations.reduce((acc: Record<string, typeof locations>, curr: {location: string}) => {
        if (!acc[curr.location]) {
            acc[curr.location] = [];
        }
        acc[curr.location].push(curr);
        return acc;
    }, {});

    };


const Home = () => {
    const groupedLocations = groupLocationsByCity(locations);
    return (
        <main className="home">
            {/* Header*/}
            <Header
                title={"Gulf Getaway"}
                description={"Call Kristen at 727-288-8354 for more details"}
            />
            {/*End of Header*/}

            <NavBarHome/>

            {/* Rent */}
            <section className="container">
                <h1
                    className="text-5xl text-gray-600 font-semibold text-dark-100 flex justify-center text-center">
                    Choose your dream house</h1>
                {/* Grouped Cards */}
                {Object.entries(groupedLocations).map(([city, group]) => (
                    <div key={city} className="my-10">
                        <h2 className="text-4xl font-bold text-blue-600 mb-4 text-center">{city}</h2>
                        <div className="rent-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {group.map((locationObj: typeof locations[0] ) => (
                                <div key={locationObj.id} id={`location-${locationObj.id}`} className="rent-card-item">
                                    <Rent
                                        {...locationObj}
                                        imageUrl={locationObj.imageUrl[0]} // flatten
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            {/*End of Rent*/}
            <Footer/>
            <button
                onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg"
            >
                ↑ Top
            </button>
        </main>

    )
}
export default Home
