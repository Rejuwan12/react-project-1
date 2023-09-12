import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blog, setBlog] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Blogs: {blog.length}</h2>
        </div>
    );
};

export default Blogs;