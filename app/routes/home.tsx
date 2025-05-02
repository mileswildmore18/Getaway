// Import components
import  {addresses} from "~/constants";
import Header from "../../components/Header";
import Rent from "../../components/Rent";

const Home = () => {
    return (
        <main className="home">
        <Header title={"Gulf GetAway"} description={"Rent your dream home"} />
        <Rent />
        </main>
    )
}
export default Home
