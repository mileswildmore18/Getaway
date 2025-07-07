import {useParams} from "react-router";
import {useState} from "react";
import {addresses} from "~/constants";

const groupMap: Record<string, { title: string; ids: number[] }> = {
    "clearwater-condos": {
        title: "Clearwater Beach Condos",
        ids: [1, 2, 3, 4, 5, 6],
    },
    "clearwater-bungalows": {
        title: "Clearwater Beach Bungalows",
        ids: [7, 8, 9],
    },
};

const DreamhouseGroup = () => {
    const {groupId} = useParams<{ groupId: string }>();
    const [visiblePhotos, setVisiblePhotos] = useState<number | null>(null);

    const groupConfig = groupMap[groupId || ""];

    if (!groupConfig) {
        return <div className="text-center text-red-500">Group not found.</div>;
    }

    const groupHouses = addresses.filter(
        house => groupConfig.ids.includes(house.id)
    );

    const togglePhotos = (id: number) => {
        setVisiblePhotos(prev => (prev === id ? null : id));
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center capitalize">
                {groupConfig.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {groupHouses.map((house) => (
                    <div key={house.id} className="border p-4 rounded shadow">
                        <h2 className="font-semibold text-lg mb-2">{house.name}</h2>
                        <img
                            src={`/assets/images/${house.imageUrls[0]}`}
                            alt={house.name}
                            className="rounded-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">{house.description}</p>
                        <p className="text-sm text-gray-500">{house.address}</p>
                        <p className="text-sm text-gray-700 font-medium">{house.tags.join(" ")}</p>

                        {house.imageUrls.length > 1 && (
                            <button
                                onClick={() => togglePhotos(house.id)}
                                className="bg-blue-500 text-white mt-2 px-4 py-2 rounded hover:bg-blue-600 transition"
                            >
                                {visiblePhotos === house.id ? "Hide Photos" : "See More Photos"}
                            </button>
                        )}

                        {visiblePhotos === house.id && (
                            <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                {house.imageUrls.slice(1).map((img, index) => (
                                    <img
                                        key={index}
                                        src={`/assets/images/${img}`}
                                        alt={`${house.name} ${index + 2}`}
                                        className=" w-full h-auto rounded shadow"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DreamhouseGroup;
