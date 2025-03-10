const YOUR_ApI_KEY = "AIzaSyDcswZo6CNZCJUA8KqmziKe9ltqKRwYopo"

const videoCArdContainer=document.getElementById("content");
const video_https="https://www.googleapis.com/youtube/v3/videos?"

const numberOfVideosOnIntalLoad =20;

const generateQueryParam=new URLSearchParams({
  key:YOUR_ApI_KEY,
  part:"snippet, contentDetails",
  chart:"mostPopular",
  maxResults:numberOfVideosOnIntalLoad,
  regionCode:"IN",
})

// console.log(video_https+generateQueryParam);

fetch(video_https+generateQueryParam)
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err));