import { Link } from "react-router-dom";

const HomeHeader = () => {
    return (
        <div className="hero bg-base-200 lg:p-12 rounded-lg">
            <div className="hero-content flex-col md:flex-row lg:flex-row">
                <div>
                    <h1 className="text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
                    <Link to="/listed_books"><button className="btn text-white bg-[#23BE0A]">View The List</button></Link>
                </div>
                <img src="../../../public/brett-jordan-hF48Dxg7qv8-unsplash.jpg" className="max-w-60 lg:max-w-xs rounded-3xl" />
            </div>
        </div>
    );
};

export default HomeHeader;