
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blog/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]= useState([]);
  const [readingTime,  setReadingTime]= useState(0)

  const handleAddToBookmark = blog =>{
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks);
  }
  const handleReadingTime = time =>{
     setReadingTime(readingTime + time);
  }

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}
       handleReadingTime={handleReadingTime}></Blogs>
      <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
      </div>
     
      
    </>
  )
}

export default App
