import {Link } from "react-router";

type HouseAddress = {
    id: number;
    name: string;
    imageUrl: string;
    location: string;
    tags: string[];
};

const Rent = ({ name, imageUrl, location, tags }: HouseAddress) => {
    return (
        <Link
            to={`/dreamhouse/`}
            className="rent"
        >
            <img
                src={imageUrl}
                alt={name} />
            <article>
                <h2 className="flex justify-center text-center">{name}</h2>
                <h3 className="flex justify-center">{location}</h3>
                <h3 className="flex justify-center">{tags}</h3>
            </article>
        </Link>
    );
};

export default Rent;