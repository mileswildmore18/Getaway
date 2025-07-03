import { useParams } from "react-router-dom";
import { addresses } from "~/constants";

const groupMap: Record<string, { title: string; ids: number[] }> = {
    "clearwater-condos": {
        title: "Clearwater Beach Condos",
        ids: [1, 2, 3, 4, 5 ,6],
    },
    "clearwater-bungalows": {
        title: "Clearwater Beach Condos",
        ids: [7, 8, 9],
    },
};

const DreamhouseGroup = () => {
    const { groupId } = useParams<{ groupId: string }>();

    const groupConfig = groupMap[groupId || ""];

    if (!groupConfig) {
        return <div className="text-center text-red-500">Group not found.</div>;
    }

    const groupHouses = addresses.filter(
        house => groupConfig.ids.includes(house.id)
        );

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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DreamhouseGroup;
