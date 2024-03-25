import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-xl font-medium text-center mt-20">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.data}</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="text-blue-600">Back To Home</Link>
        </div>
    );
};

export default ErrorPage;