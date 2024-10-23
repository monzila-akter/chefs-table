import { FaSistrix } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center py-5 lg:py-7 space-y-4 lg:space-y-0">
            <div>
                <h2 className="text-3xl font-bold">Recipe Calories</h2>
            </div>
            <div className="flex space-x-10 items-center">
                <p><a href="http://">Home</a></p>
                <p><a href="http://">Recipes</a></p>
                <p><a href="http://">About</a></p>
                <p><a href="http://">Search</a></p>
            </div>
            <div className="flex space-x-4 items-center">
                <button className="flex space-x-2 items-center bg-[#150B2B0D] w-56 h-12 rounded-full px-6">
                    <span><FaSistrix></FaSistrix></span>
                    <span>Search</span>
                    </button>
                <div className="w-12 h-12 bg-[#0BE58A] rounded-full flex justify-center items-center text-2xl"><span><FaUserCircle></FaUserCircle></span></div>
            </div>
        </div>
    );
};

export default Header;