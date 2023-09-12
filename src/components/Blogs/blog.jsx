import PropTypes from 'prop-types';

const blog = ({Blog}) => {
    console.log(Blog);
    return (
        <div>
            
        </div>
    );
};
blog.propTypes={
    blog: PropTypes.object.isRequired
}
export default blog;