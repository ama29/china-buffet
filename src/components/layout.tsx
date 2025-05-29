import { Outlet } from 'react-router';
import Header from '../components/header'
import NavBar from '../components/navbar'

const Layout = () => {
    return (
        <div className="max-w-full min-h-screen m-0 p-0">
            <Header />
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Layout;