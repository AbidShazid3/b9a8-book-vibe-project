import { Link } from "react-router-dom";

const NewBooks = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-135px)] lg:min-h-[calc(100vh-135px)]">
            <h2 className="text-2xl font-bold">No new books are available now</h2>
            <Link to="/" className="text-[#23BE0A] text-xl font-medium">Back to Home</Link>
        </div>
    );
};

export default NewBooks;