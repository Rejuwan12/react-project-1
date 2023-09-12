import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';


const Blog = ({blog, handleAddToBookmark,  handleReadingTime}) => {
    const {title, cover,author, author_img, reading_time, posted_date, hashtags }=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover of the title ${title}`}/>
            <div className='flex justify-between mb-4 '>
                <div className='flex items-center gap-2 '>
               <img className='w-16 rounded-full' src={author_img} alt="" />
               <div>
                <h3 className='text-2xl'>{author}</h3>
                <p>{posted_date}</p>
               </div>
                </div>
                <div>
                 <span>{reading_time} min read</span>
                 <button 
                 onClick={()=>handleAddToBookmark(blog)} className='ml-2  text-blue-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href=''>Tags: #{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleReadingTime(reading_time)} className='text-purple-800 text-bold'>Read More</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
    
}
export default Blog;