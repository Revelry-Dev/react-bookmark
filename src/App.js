import { useEffect, useState } from "react";
import BookmarkList from "./BookmarkList";
import BookmarkForm from "./BookmarkForm";



export default function App() {

  const [bookmarks, setBookmarks] = useState([]);

 
  // on mount, go get bookmarks out of localStorage

  useEffect(() => {
    const lsBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    setBookmarks(lsBookmarks);
  }, []);
// store new bookmarks in local storage when they change
  useEffect(() => {

    // persist bookmarks to localStorage
   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  }, [bookmarks]);
 
 

 function removeBookmark(e, url) {

  e.preventDefault();

  const filtered = bookmarks.filter((bookmark) => {
    return bookmark.url !== url;
  });
  
  setBookmarks(filtered);
 }

  return (
    <>
    <BookmarkForm bookmarks={bookmarks} setBookmarks={setBookmarks} />

 
    <BookmarkList bookmarks={bookmarks} remove={removeBookmark}/>
    
    
    
    </>
  )
}