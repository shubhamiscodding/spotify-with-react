function SideBar({ setSelectedContent }) {
  let option3 = [
    { id: 1, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201.png", name: "Nadir On GO" },
    { id: 2, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png", name: "Coke STUDIO" },
    { id: 3, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(2).png", name: "MKBHD" },
    { id: 4, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(3).png", name: "FIGMA" },
    { id: 5, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(4).png", name: "ATC Android" },
    { id: 6, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(5).png", name: "Alux.com" },
    { id: 7, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(5).png", name: "Alux.com" },
    { id: 8, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(5).png", name: "Alux.com" },
    { id: 9, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(5).png", name: "Alux.com" },
    { id: 10, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(5).png", name: "Alux.com" },
    { id: 11, url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(5).png", name: "Alux.com" }
  ];

  return (
    <>
      <div className="side-section">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/hambarger.png" alt="#" />
          <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Youtube%20logo.png" alt="#" className="logo1" />
        </div>

        <div className="option-icon">
          <div className="icons">
            <div className="iii" onClick={() => setSelectedContent("Home")}>
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true"
                alt=""
              />
              <p>Home</p>
            </div>
            <div className="iii" onClick={() => setSelectedContent("Explore")}>
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true"
                alt=""
              />
              <p>Explores</p>
            </div>
            <div className="iii">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true"
                alt=""
              />
              <p>Shorts</p>
            </div>
            <div className="iii" onClick={() => setSelectedContent("subscription")}>
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true"
                alt=""
              />
              <p>Subscriptions</p>
            </div>
            <div className="iii" onClick={() => setSelectedContent("library")}>
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true"
                alt=""
              />
              <p>Library</p>
            </div>
          </div>
          <hr className="line" />
          <div className="icons">
            <div className="iii">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true"
                alt=""
              />
              <p>History</p>
            </div>
            <div className="iii">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true"
                alt=""
              />
              <p>Your videos</p>
            </div>
            <div className="iii">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true"
                alt=""
              />
              <p>Watch later</p>
            </div>
            <div className="iii">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true"
                alt=""
              />
              <p>Liked videos</p>
            </div>
            <div className="iii">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true"
                alt=""
              />
              <p>Show more</p>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="option-icon3">
          {option3.map((sideoption3) => (
            <div key={sideoption3.id} className="icons">
              <img src={sideoption3.url} alt="#" />
              <p>{sideoption3.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
