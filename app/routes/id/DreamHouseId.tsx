import {useParams} from "react-router";
import {useState} from "react";
import {addresses} from "~/constants";

const DreamHouseId = () => {
    const {id} = useParams<{ id: string }>();
    const [showMorePhotos, setShowMorePhotos] = useState(false);


    const house = addresses.find((house) => house.id === Number(id));

    if (!house) {
        return <div className="text-center text-red-500"> House not found</div>;
    }

    return <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">{house.name}</h1>
        <p className="text-center text-gray-600 mb-4">{house.address}</p>

        {/*First photo displayed by default*/}
        <div className="grid grid-cols-2 md: grid-cols-3 gap-4 mb-4">
            <img
                src={`/assets/images/${house.imageUrls[0]}`}
                alt={house.name}
                className="col-span-full rounded-lg shadow"
            />
            {showMorePhotos && house.imageUrls.slice(1).map((imageUrl, index) => (
                <img
                    key={index}
                    src={`/assets/images/${imageUrl}`}
                    alt={`${house.name} ${index + 2}`}
                    className="rounded-lg shadow"
                />
            ))}
            {house.imageUrls.map((imageUrl, index) => (
                <img
                    key={index}
                    src={`/assets/images/${imageUrl}`}
                    alt={`${house.name} ${index + 1}`}
                    className="rounded-lg shadow"
                />
            ))}
        </div>

        {/*Toggle button to show more photos*/}
        {house.imageUrls.length > 1 && (
            <div className="text-center mb-4">
                <button
                    onClick={() => setShowMorePhotos(!showMorePhotos)}
                    className="bg-blue-500 text-white hover:bg-blue-600 text-white py-2 px-4 rounded transition"
                >
                    {showMorePhotos ? "Hide Photos" : "Show More Photos"}
                </button>
            </div>
        )}

        <div className="bg-gray-100 p-4 rounded shadow">
            <p>{house.description}</p>
            <p className="mt-2 text-lg font-semibold">Estimated
                Price: {house.estimatedPrice || "Please call for more details"}</p>
            <p className="mt-1 text-sm text-gray-600">Tags: {house.tags.join(" ")}
            </p>
        </div>
    </div>
}

export default DreamHouseId;