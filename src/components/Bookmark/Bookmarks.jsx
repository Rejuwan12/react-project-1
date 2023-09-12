import PropTypes  from 'prop-types';

const Bookmarks = ({bookmark}) => {
    const {title}= bookmark;

    return (
        <div className='bg-gray-100 p-4 m-4 rounded-xl'>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};
Bookmarks.propTypes ={
  bookmark: PropTypes.object
}
export default Bookmarks;