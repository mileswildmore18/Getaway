import {cn} from "~/lib/utils";

interface Props {
    title: string;
    description: string;
}

// Header
const Header = ({title, description} : Props) => {
    return (
        <header className="header">

            {/* Title and Description of the website*/}
            <article>
                <h1 className={cn("text-7xl font-bold font-mono flex justify-center items-center text-center")}>{title}</h1>
                <p className={cn("text-2xl font-bold font-mono flex justify-center bg-green-900 text-yellow-400 p-6 text-center")}>{description}</p>
            </article>
            {/*End of Title and Description*/}

        </header>
    )
}
// End of Header
export default Header
