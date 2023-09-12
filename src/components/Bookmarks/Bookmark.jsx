import PropTypes  from 'prop-types';
import Bookmarks from '../Bookmark/Bookmarks';
const Bookmark = ({bookmarks, readingTime}) => {
    return (
        <div className="md:1/3 bg-gray-200 ml-4 mt-2 ">
            <div>
                <h3 className='text-2xl'>Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">BookMarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmarks 
                    key={bookmark.id}
                    bookmark={bookmark}></Bookmarks>)
            }
        </div>
    );
};
Bookmark.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmark;