import { Link } from "react-router";

type HouseAddress = {
    id: number;
    name: string;
    imageUrl: string;
    location: string;
    tags: string[];
    type?: string;
    isGroupCard?: boolean;
    groupId?: string;
};

const Rent = ({ id, name, imageUrl, location, tags, isGroupCard, groupId }: HouseAddress) => {
    let to = "";

    if (isGroupCard && groupId) {
        to = `/dreamhouse/group/${groupId}`;
    } else {
        to = `/dreamhouse/${id}`;
    }

    return (
        <Link to={to} className="rent block hover:shadow-lg transition-transform duration-300">
            <img
                 src={imageUrl}
                 alt={name}
                 className="w-full h-auto transform hover:scale-105 transition-transform duration-300 ease-in-out"/>
            <article className="mt-2 text-center">
                <h2 className="flex justify-center">{name}</h2>
                <h3 className="flex justify-center">{location}</h3>
                <h3 className="flex justify-center">{tags}</h3>
            </article>
        </Link>
    );
};

export default Rent;
