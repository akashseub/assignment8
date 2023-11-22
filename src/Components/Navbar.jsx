import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex items-center justify-between max-w-screen-xl mx-auto py-8">
            <Link to={'/'}><img src="https://i.ibb.co/gZ5PpBn/Logo.png" alt="" /></Link>
            <div>
                <ul className="flex space-x-4">
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/donation'}><li>Donation</li></Link>
                    <li>Statistics</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;