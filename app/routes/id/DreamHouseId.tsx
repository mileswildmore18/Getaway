import { useParams } from "react-router";
import { addresses} from "~/constants";

const DreamHouseId = () => {
    const { id } = useParams<{ id: string }>();


    const house = addresses.find((house) => house.id === Number(id));

    if (!house) {
        return <div className="text-center text-red-500"> House not found</div>;
    }

    return <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">{house.name}</h1>
        <p className="text-center text-gray-600 mb-4">{house.address}</p>
        <div className="grid grid-cols-2 md: grid-cols-3 gap-4 mb-4">
            {house.imageUrls.map((imageUrl, index) => (
                <img
                    key = {index}
                    src={`/assets/images/${imageUrl}`}
                    alt={`${house.name} ${index + 1}`}
                    className="rounded-lg shadow"
                />
            ))}
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
            <p>{house.description}</p>
            <p className="mt-2 text-lg font-semibold">Estimated Price: {house.estimatedPrice}</p>
            <p className="mt-1 text-sm text-gray-600">Tags: {house.tags}</p>
        </div>
    </div>
}

export default DreamHouseId;