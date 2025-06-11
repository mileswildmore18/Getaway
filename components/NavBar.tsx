import { useState } from "react";
import {addresses} from "~/constants";

// Separate locations by city and type
type Group = Record<
    string,
    {cityLabel: string; items: typeof addresses }
>;

const groupByCityAndType = (addresses: typeof addresses): Group => {
    const map: Group = {};

    // Check if locations are in Clearwater or another city
    addresses.forEach(addr => {
        const city = addr.itinerary[0]?.location || "Other"
        let key = city;

        //Separate Clearwater into Condos and Bungalows
        if (city === "Clearwater") {
            if (addr.type === "Condo") key = "Clearwater Condos";
            else if (addr.type === "Bungalow") key = "Clearwater Bungalows";
        }
        // Check if city and property is not in Clearwater
        if (!map[key]) {
            map[key] = { cityLabel: key.includes("-") ? key.split("-")[1] : key, items: [] };
        }

        map[key].items.push(addr);
    });
    return map;
}

// Navigation Bar
const NavBar = () => {
    const groupedAddresses = groupByCityAndType(addresses);

    return (
        <div className="w-full flex flex-wrap justify-center gap-4 bg-yellow-200 py-4 shadow text-xl">
            {Object.entries(groupedAddresses).map(([key, { cityLabel, items}]) => (
                <details
                    key={key}
                    className="bg-green-100 rounded shadow-md px-4 py-2 cursor-pointer group"
                >
                    <summary className="text-blue-600 font-semibold hover-text-green-600 cursor-pointer">
                        {cityLabel}
                    </summary>
                    <div
                        className="mt-2 overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-[500px] group-open:opacity-100 max-h-0 opacity-0">
                        <ul className="flex flex-col mt-2 text-base space-y-1">
                            {items.map((addr) => (
                                <li key={addr.id}>
                                <a
                                    href={`#house-${addr.id}`}
                                    className=" block px-2 py-1 rounded hover:bg-green-200 text-blue-500 hover:text-green-500 font-bold"
                                >
                                    {addr.name}
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
