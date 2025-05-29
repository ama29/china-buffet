import { Link } from 'react-router';

const NavBar = () => {
    return (
        <div className="bg-customBronze max-w-full flex flex-row justify-evenly pt-2 pb-2">
            <div className="text-2xl font-main hover:font-bold">
                <Link to="/menu">
                    Menu
                </Link>
            </div>
            <div className="text-2xl font-main hover:font-bold">
                Contact
            </div>
            <div className="text-2xl font-main hover:font-bold">
                About
            </div>
        </div>
    );
};

export default NavBar;