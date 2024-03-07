import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="border-b-2 border-b-red-700">
            <div className="container mx-auto flex justify-between items-center ">
                <Link to="/" className="text-3xl font-bold tracking-light text-red-700">
                    CHOW.
                </Link>
            </div>
        </div>
    )
}

export default Header