import { useLoaderData } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import Books from "../Books/Books";

const Home = () => {
    const books = useLoaderData();
    return (
        <div className="mt-12">
            <HomeHeader></HomeHeader>
            <div className="mt-20">
                <h1 className="text-4xl font-bold text-center">Books</h1>
                <div className='mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        books.map(book => <Books
                            key={book.bookId}
                            book={book}
                        ></Books>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;