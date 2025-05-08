import {useState} from "react";
import {addresses} from "~/constants";



// Photos
const Photos = () => {
    const [showPhotos, setPhotos] = useState(false);
    const address = addresses[0];
    return (
        <div className="p-4">
           <h2 className="text-xl font-bold">{address.name}</h2>
            <p className="text-gray-600">{address.description}</p>
            <p className="text-gray-500">{address.address}</p>
            <p className="text-greem-600 font-semibold">{address.estimatedPrice}</p>
            {/* Button to show or hide photos*/}
            <button
                onClick={() => setPhotos(!showPhotos)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                {showPhotos ? "Hide Photos" : "See More Photos"}
            </button>

            {showPhotos && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {address.imageUrls.map((imageUrl, index ) => (
                        <img
                        key={index}
                        src={`/images/${imageUrl}`}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-auto rounded shadow"
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default Photos
