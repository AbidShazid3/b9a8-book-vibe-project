import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const ReadBookShow = ({ readBookShow }) => {
    const {bookId, image, tags, bookName, author, category, rating, publisher, yearOfPublishing, totalPages } = readBookShow;
    return (
        <div className="mt-12">
            <div className="card card-side bg-base-100 shadow-xl">
                <div className='p-6'>
                    <figure><img src={image} alt="" className='rounded-xl md:h-48 md:w-40 bg-[#F3F3F3]' /></figure>
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className="flex gap-4 py-2">
                        <div>
                            <p className="font-bold">Tags</p>
                        </div>
                        {
                            tags.map((tag, idx) => <span
                                key={idx} className='mr-2 rounded-lg text-[#23BE0A] bg-[#F3F3F3]'> #{tag}</span>)
                        }
                        <div className='flex gap-1 items-center'>
                            <CiLocationOn />
                            <p>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className='flex gap-6 border-b-2 pb-4'>
                        <div className='flex gap-2 items-center'>
                            <CgProfile />
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdOutlineInsertPageBreak />
                            <p>Page {totalPages}</p>
                        </div>
                    </div>
                    <div className="card-actions gap-5">
                        <h2 className='text-[#328EFF] p-1'>Category: {category}</h2>
                        <h3 className='text-[#FFAC33] p-1'>Rating: {rating}</h3>
                        <Link to={`/book_details/${bookId}`}><button className="text-white bg-[#23BE0A] rounded-3xl p-1">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadBookShow.propTypes = {
    readBookShow: PropTypes.object,
}

export default ReadBookShow;