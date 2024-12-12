function MainPage({ videos, handleVideoClick, selectedVideo, setSelectedVideo,setSelectedValue}) {
  return (
    <>
      <div className="num">
        <input type="radio" name="choice" value="10" defaultChecked onChange={(e) => setSelectedValue(parseInt(e.target.value))}/> 10
        <input type="radio" name="choice" value="20" onChange={(e) => setSelectedValue(parseInt(e.target.value))}/> 20
        <input type="radio" name="choice" value="30" onChange={(e) => setSelectedValue(parseInt(e.target.value))}/> 30
        <input type="radio" name="choice" value="40" onChange={(e) => setSelectedValue(parseInt(e.target.value))}/> 40
      </div>

      {selectedVideo && (
        <div className="video-player">
          <iframe
            src={selectedVideo}
            title="Selected Video"
            width="1100px"
            height="500px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button onClick={() => setSelectedVideo(null)}>Close</button>
        </div>
      )}

      <div className="main">
        <div className="box">
          {videos.map((video) => (
            <div key={video.id} onClick={() => handleVideoClick(video)}>
              <div className="ve">
                <img src={video.thumbnail} alt={video.title} />
              </div>
              <div className="write">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <small>{video.channel}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainPage;
