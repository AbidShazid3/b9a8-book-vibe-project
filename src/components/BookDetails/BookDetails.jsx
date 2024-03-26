import { Link, useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId == idInt);
    const { image, tags, bookName, author, category, rating, review, publisher, yearOfPublishing, totalPages } = book;
    return (
        <div className="mt-12">
            <div className="flex rounded-lg p-4 gap-10">
                <div className="bg-base-200 rounded-2xl">
                    <img src={image} className="max-w-full shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <h3 className="text-xl py-4 border-b-2">By: {author}</h3>
                    <p className="py-3 border-b-2">{category}</p>
                    <p className="py-3"><span className="font-bold">Review :</span> {review}</p>
                    <div className="flex gap-8 py-4 border-b-2">
                        <p className="font-bold">Tags</p>
                        {
                            tags.map((tag, idx) => <span
                                key={idx} className='mr-2 rounded-lg text-[#23BE0A] bg-[#F3F3F3]'> {tag}</span>)
                        }
                    </div>
                    <div className="py-4">
                        <p>Number of Pages: <span className="font-bold"> {totalPages}</span></p>
                        <p>Publisher: <span className="font-bold"> {publisher}</span></p>
                        <p>Year of Publishing: <span className="font-bold"> {yearOfPublishing}</span></p>
                        <p>Rating: <span className="font-bold"> {rating}</span></p>
                    </div>
                    <Link ><button className="btn btn-outline mr-4">Read</button></Link>
                    <Link><button className="btn bg-[#50B1C9]">Wishlist</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;