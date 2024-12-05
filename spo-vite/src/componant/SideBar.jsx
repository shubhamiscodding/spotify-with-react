

function SideBar(){
    return(
        <>
        <div className="side_bar">
          <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Spotify%20logo.png" alt="logo"  className='logo' />
          <div className="nav-button">
            <div className="option">
              <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Home.png" alt="home" />
              <p>Home</p>
            </div>
            <div className="option1">
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Search.png" alt="home" />
            <p>search</p>
            </div>
            <div className="option1">
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Your%20library.png" alt="home" />
            <p>Your Library</p>
            </div>
            <div className="option1">
            </div>
            <div className="option1">
            </div>
            <div className="option1">
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Create.png" alt="home" />
            <p>Create PLaylist</p>
            </div>
            <div className="option1">
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Liked.png" alt="home" />
            <p>Liked Songs</p>
            </div>
            <div className="option1">
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/your%20episodes.png" alt="home" />
            <p>Your Episodes</p>
            </div>
            <div className="option1">
            </div>
            <div className="option1">
            </div>
            <p>FAV</p>
            <p>Daily Mix</p>
            <p>Discover Weekly</p>
            <p>Malayalam</p>
            <p>Dance/Electronix Mix</p>
            <p>Edm/Popular</p>
            <div className="install-option">
              <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/grommet-icons_install-option.png" alt="install" />
              <p>Install</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default SideBar;