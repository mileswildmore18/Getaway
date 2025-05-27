import {addresses} from "~/constants";

const NavBar = () => {
    return (
        <div className="w-full flex justify-center gap-7 bg-yellow-200 py-4 shadow text-2xl">
        {addresses.map((address, index) => (
            <div
                key={address.id}
                className='px-4 py-2 rounded shadow-md bg-green-100'
            >
                <a
                    key={address.id}
                    href={`#house-${address.id}`}
                    className="text-blue-500 hover:text-green-500 font-medium"
                >
                    {address.name}
                </a>
            </div>
            ))}
        </div>
    )
}
export default NavBar
