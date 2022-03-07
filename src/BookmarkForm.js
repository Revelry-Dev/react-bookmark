import { useState } from "react";

const apiUrl = "https://opengraph.io/api/1.1/site";
const appId = "58858c7bcf07b61e64257391";


export default function BookmarkForm({ bookmarks,setBookmarks}) {

    const [url, setUrl] = useState("");

    const [isProcessing, setIsProcessing] = useState(false);

    function handleSubmit(e)
{
  e.preventDefault();
  setIsProcessing(true);

  //fetch a URL from opengraph.io api
 const encodedUrl = encodeURIComponent(url);

  fetch (`${apiUrl}/${encodedUrl}?app_id=${appId}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);

    const newBookmark = {
      title: data.hybridGraph.title,
      image: data.hybridGraph.image,
      url: data.hybridGraph.url
    }

    if((bookmarks.filter(item => item.url === newBookmark.url)).length === "0")  {

    setBookmarks([...bookmarks, newBookmark]);
    setIsProcessing(false);
    setUrl('');
    }

    else {
        
        alert("Bookmark already exists");
        setUrl('');
    }
 })

}    



        return (
        <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="https://example.com"
      value={url}
      onChange={(e) => setUrl(e.target.value)} />
      <button type="submit" disabled={isProcessing}>Add</button>

    </form>
        )
    }