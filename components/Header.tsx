import {cn} from "~/lib/utils";

interface Props {
    title: string;
    description: string;
}

// Header
const Header = ({title, description}: Props) => {


    return (
        <header className="header">

            {/* Title and Description of the website*/}
            <article className="fade-in">
                <h1
                    className={cn("text-6xl font-bold font-mono font-lugrasimo flex justify-center items-center text-center")}>{title}</h1>
                <p
                    className={cn("text-2xl font-bold font-mono flex justify-center bg-blue-600 text-white p-6 text-center")}>{description}</p>

                {/* Wave Animation */}
                <div className="wave-container">
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                    <div className="wave wave4"></div>
                </div>
                {/* End Wave Animation */}
            </article>
            {/*End of Title and Description*/}
        </header>
)
}
// End of Header
export default Header
