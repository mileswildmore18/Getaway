import {addresses} from "~/constants";

//Grouping addressses by city name from the 'itinerary' field
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
        <div className="w-full flex flex-wrap justify-center gap-4 bg-yellow-200 py-4 shadow text-xl">
            {Object.entries(groupedAddresses).map(([city, cityAddresses]) => (
                <details
                    key={city}
                    className="bg-green-100 rounded shadow-md px-4 py-2 cursor-pointer group"
                >
                    <summary className="text-blue-600 font-semibold hover-text-green-600 cursor-pointer">
                        {city}
                    </summary>
                    <div
                        className="mt-2 overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-[500px] group-open:opacity-100 max-h-0 opacity-0">
                        <ul className="flex flex-col mt-2 text-base space-y-1">
                            {cityAddresses.map((address) => (
                                <li key={address.id}>
                                <a
                                    href={`#house-${address.id}`}
                                    className=" block px-2 py-1 rounded hover:bg-green-200 text-blue-500 hover:text-green-500 font-bold"
                                >
                                    {address.name}
                                </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>
            ))}
        </div>
    )
}
export default NavBar
