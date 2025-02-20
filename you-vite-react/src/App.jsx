import { useState, useEffect } from "react";
import "./index.css";
import Header from "./componant/Header.jsx";
import MainPage from "./componant/MainPage.jsx";
import SideBar from "./componant/SideBar.jsx";
import "./css/SideBar.css";
import "./css/MainPage.css";
import "./css/Header.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedValue, setSelectedValue] = useState(10);
  const [selectedContent, setSelectedContent] = useState("Home");

  const apiKey = "AIzaSyCdJfCOyF9TM1wPRSJb4UdSNFCXW3nR73U";
  // AIzaSyCdJfCOyF9TM1wPRSJb4UdSNFCXW3nR73U

  const fetchVideos = (query = "") => {
    const baseQuery = query.trim() ? query : ""; 
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${baseQuery}&key=${apiKey}&type=video&maxResults=${selectedValue}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          const videoData = data.items.map((item) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            channel: item.snippet.channelTitle,
            thumbnail: item.snippet.thumbnails.high.url,
          }));
          setVideos(videoData);
        } else {
          console.error("No items found in the response.");
          setVideos([]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleButtonClick = () => {
    fetchVideos(searchQuery);
  };

  
  useEffect(() => {
    fetchVideos();
  }, [selectedValue]);


  const handleVideoClick = (video) => {
    const videoUrl = `https://www.youtube.com/embed/${video.id}`;
    setSelectedVideo(videoUrl);
  };

  useEffect(() => {
    if (selectedContent === "Explore") {
      fetchVideos("Trending");
    } else if (selectedContent === "Home") {
      fetchVideos("");
    }
  }, [selectedContent, selectedValue]);


  return (
    <>
      <div className="contain">
        <div className="page1">
          <SideBar setSelectedContent={setSelectedContent} />
        </div>
        <div className="page">
          <div className="head">
            <Header
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleButtonClick={handleButtonClick}
            />
          </div>
          <div className="mainn">
            <MainPage
              videos={videos}
              handleVideoClick={handleVideoClick}
              selectedVideo={selectedVideo}
              setSelectedValue={setSelectedValue}
              setSelectedVideo={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
