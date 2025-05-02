interface Props {
    title: string;
    description: string;
}

// Header
const Header = ({title, description} : Props) => {
    return (
        <header className="header">
            <article>
                <h1 className="text-5xl font-bold flex justify-center bg-yellow-200 text-green-800 p-6">{title}</h1>
                <p className="text-2xl font-bold flex justify-center bg-yellow-200 text-green-800 p-6">{description}</p>
            </article>
        </header>
    )
}
// End of Header
export default Header
