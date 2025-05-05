// Import components
import  {addresses} from "~/constants";
import Header from "../../components/Header";
import Rent from "../../components/Rent";

const Home = () => {
    return (
        <main className="home">
            <Header
                title={"Gulf GetAway"}
                description={"Rent your dream home"}
            />

            {/* Rent */}
            <section className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <Rent />
                </div>
            </section>
            {/*End of Rent*/}

        </main>
    )
}
export default Home
