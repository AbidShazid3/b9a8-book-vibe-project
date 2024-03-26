import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localstorage";
import ReadBookShow from "../ReadBookShow/ReadBookShow";


const ListedBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [displayRead, setDisplayRead] = useState([]);

    const handleDisplayReadFilter = filter => {
        if(filter === 'rating'){
            setDisplayRead(readBooks);
        }
        else if(filter === 'totalPages'){
            setDisplayRead(readBooks);
        }
        else if(filter === 'yearOfPublishing'){
            setDisplayRead(readBooks);
        }
    
    }

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if (books.length > 0) {
            const booksRead = books.filter(book => storedBookIds.includes(book.bookId));
            
            setReadBooks(booksRead);
            setDisplayRead(booksRead);
        }

    }, [books])

    return (
        <div>
            <h1 className="text-center text-2xl font-bold border-2 p-4 bg-[#F3F3F3] rounded-2xl mt-8">Books</h1>
            <div className="dropdown flex justify-center mt-8">
                <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleDisplayReadFilter('rating')}><a>Rating</a></li>
                    <li onClick={()=> handleDisplayReadFilter('totalPages')}><a>Number of Pages</a></li>
                    <li onClick={()=> handleDisplayReadFilter('yearOfPublishing')}><a>Publisher year</a></li>
                </ul>
            </div>
            <div role="tablist" className="tabs tabs-lifted flex">
                <a role="tab" className="tab">Read Books</a>
                <a role="tab" className="tab tab-active">Wishlist Books</a>
            </div>
            <div className="">
                {
                    displayRead.map((readBookShow, idx) => <ReadBookShow
                        key={idx}
                        readBookShow={readBookShow}
                    ></ReadBookShow>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;