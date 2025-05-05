import {Link} from "react-router";


const Rent = ({id, name, imageUrl, location, tags} : HouseAddress) => {

    return (
        <Link to={{
            pathname: `/rent/${id}`,
            search: `?name=${name}&location=${location}&tags=${tags}`
        }}
        className="rent"
        >
            <img src={imageUrl} alt={name}/>

            <article>
                <h2>{name}</h2>
            </article>
        </Link>
    )
}
export default Rent
