
import { Link } from 'react-router';
import '../App.css';
import logo from "/src/assets/logo/cb-logo-temple.png"

const Header = () => {
    return (
        <div className="bg-customRed max-w-full pb-6">
            <header>
                <div className="flex justify-center items-center">
                    <Link to="/">
                        <img src={logo} className="h-26" alt="logo" />
                    </Link>
                </div>
                <div>
                    <h1 className="font-main text-5xl text-customBronze flex justify-center items-center">
                        China Buffet
                    </h1>
                </div>
            </header>
        </div>
    );
};

export default Header;