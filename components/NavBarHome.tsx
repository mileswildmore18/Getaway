import {locations} from "~/constants";

// Navigation Bar
const NavBarHome = () => {
    return (
        <div className="w-full flex flex-wrap justify-center gap-3 bg-yellow-200 py-4 shadow text-xl">
            {locations.map((location, index) => (
                <div
                    key={location.id}
                    className='px-4 py-2 rounded shadow-md bg-green-100'
                >
                    <a
                        key={location.id}
                        href={`#location-${location.id}`}
                        className="text-blue-500 hover:text-green-500 font-medium"
                    >
                        {location.name}
                    </a>
                </div>
            ))}
        </div>
    )
}
export default NavBarHome
