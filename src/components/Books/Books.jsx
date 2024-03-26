import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Books = ({ book }) => {
    const {bookId, image, tags, bookName, author, category, rating } = book;
    return (
        <Link to={`/book_details/${bookId}`} className='transition hover:scale-105'>
            <div className="card bg-base-100 shadow-xl">
                <div className='p-6'>
                    <figure className="bg-[#F3F3F3] rounded-2xl p-10 ">
                        <img src={image} alt="Book" className="rounded-xl md:h-48 md:w-40" />
                    </figure>
                </div>
                <div className="card-body">
                    <div>
                        {
                            tags.map((tag, idx) => <span
                                key={idx} className='mr-2 rounded-lg text-[#23BE0A] bg-[#F3F3F3]'> {tag}</span>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p className='pb-4 border-b-2 border-dashed'>By: {author}</p>
                    <div className="card-actions mt-2">
                        <p>{category}</p>
                        <div className='flex gap-2 items-center'>
                            <p>{rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Books.propTypes = {
    book: PropTypes.object,
}

export default Books;