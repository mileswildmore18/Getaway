import {locations} from "~/constants";
import {useState} from "react";

//Group locations by city name extracted from 'location' field
const groupByCity = (locationsArray: typeof locations) => {
    return locationsArray.reduce((acc: Record<string, typeof locations>, loc) => {
        const city = loc.location.split(",")[0].trim(); // Use city name only
        if (!acc[city]) acc[city] = [];
        acc[city].push(loc);
        return acc;

    }, {});
}

// Navigation Bar
const NavBarHome = () => {
    const groupedLocations = groupByCity(locations);

    return (
        <div className="w-full flex flex-wrap justify-center gap-4 bg-yellow-200 py-4 shadow text-xl">
            {Object.entries(groupedLocations).map(([city, cityLocations]) => (
                <details
                    key={city}
                    className="bg-green-100 rounded shadow-md px-4 py-2 cursor-pointer group"
                >
                    <summary className="text-blue-600 font-semibold group-hover:text-blue-600 cursor-pointer">
                        {city}
                    </summary>
                    <div
                        className="mt-2 overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-[500px] group-open:opacity-100 max-h-0 opacity-0">
                        <ul className="flex flex-col mt-2 text-base space-y-1">
                            {cityLocations.map((location) => (
                                <li key={location.id}>
                                    <a
                                        href={`#location-${location.id}`}
                                        className="block px-4 py-2 hover:bg-blue-100 text-blue-500"
                                    >
                                        {location.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>
            ))}
        </div>
    );
};
export default NavBarHome
