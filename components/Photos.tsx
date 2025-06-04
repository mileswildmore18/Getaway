import { useState } from "react";
import { addresses } from "~/constants";

// Photos
const Photos = () => {
    const [visiblePhotos, setVisiblePhotos] = useState<number | null>(null);

    const togglePhotos = (id: number) => {
        setVisiblePhotos(prev => (prev === id ? null : id));
    };

    return (
        <div className="p-4 space-y-8">
            {addresses.map((address) => (
                <div id={`house-${address.id}`} key={address.id} className="space-y-3 border-b pb-6">
                    <img
                        src={`/assets/images/${address.imageUrls[0] || "file.jpg"}`}
                        alt={address.name}
                        className="w-full h-auto rounded shadow"
                    />

                    {/* Name, description, address, and price */}
                    <h2 className="text-3xl font-bold">{address.name}</h2>
                    <p className="text-gray-600">{address.description || "No description available"}</p>
                    <p className="text-gray-500">{address.address || "No address listed"}</p>
                    <p className="text-green-600 font-semibold">{address.estimatedPrice || "Please call for current rates"}</p>
                    <h3 className="text-xl font-semibold">What this place offers:</h3>
                    <p className="text-gray-700 font-medium">{address.tags}</p>

                    {/* Toggle button */}
                    {address.imageUrls.length > 1 && (
                        <button
                            onClick={() => togglePhotos(address.id)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            {visiblePhotos === address.id ? "Hide Photos" : "See More Photos"}
                        </button>
                    )}

                    {/* Extra photos grid */}
                    {visiblePhotos === address.id && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {address.imageUrls.slice(1).map((imageUrl, index) => (
                                <img
                                    key={index}
                                    src={`/assets/images/${imageUrl}`}
                                    alt={`${address.name} ${index + 2}`}
                                    className="w-full h-auto rounded shadow"
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Photos;
