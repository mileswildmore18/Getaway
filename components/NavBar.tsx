import {addresses} from "~/constants";

//Grouping addressses by city name from the 'itenerary' field
const groupByCity = (addresses: typeof addresses) => {
    const cityMap: Record<string, typeof addresses> = {};

    addresses.forEach(address => {
        const city = address.itinerary[0]?.location || "Other";
        if (!cityMap[city]) cityMap[city] = [];
        cityMap[city].push(address);
    });

    return cityMap;
}

// Navigation Bar
const NavBar = () => {
    const groupedAddresses = groupByCity(addresses);

    return (
        <div className="w-full flex flex-wrap justify-center gap-3 bg-yellow-200 py-4 shadow text-xl">
            {Object.entries(groupedAddresses).map(([city, cityAddresses]) => (
                <details key={city} className="bg-green-100 rounded shadow-md px-4 py-2 cursor-pointer group">
                    <summary className="text-blue-500 font-semibold hover-text-green-500 cursor-pointer">
                        {city}
                    </summary>
                    <div className="flex flex-col mt-2 pl-2 space-y-1">
                        {cityAddresses.map((address) => (
                            <a
                                key={address.id}
                                href={`#house-${address.id}`}
                                className="text-blue-500 hover:text-green-500 font-medium"
                            >
                                {address.name}
                            </a>
                        ))}
                    </div>
                </details>
            ))}
        </div>
    )
}
export default NavBar
