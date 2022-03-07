export default function BookmarkList({ bookmarks, remove }) {


    return (
    <>
    {bookmarks.map((bookmark, index) => (
    <a 
    key={index} 
    href={bookmark.url} 
    className="bookmark" 
    target="_blank" 
    rel="noreferrer">
      <button onClick={(e) => remove(e, bookmark.url)}>X</button>
      <img src={bookmark.image} alt="bookmark title" />
      <span>{bookmark.title}</span>
    </a>
    ))}
    </>
    );
}
