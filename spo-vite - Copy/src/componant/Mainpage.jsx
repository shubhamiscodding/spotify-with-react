
function Mainpage(){

    let playlist=[
        { id:1, name: "Liked songs", img_url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Liked.png" },
        { id:2, name: "neffix playlist", img_url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image4.png"},
        { id:3, name: "k/da", img_url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image3.png"},
        { id:4, name: "Liked songs", img_url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image1.png"},
        { id:5, name: "dance", img_url: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image2.png"},
    ]

    let singers=[
        {id:1, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image9.png", tittle:"weekly motivation"},
        {id:2, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image8.png", tittle:"MEDITATION SELF"},
        {id:3, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image7.png", tittle:"WORD BEYOND ACT.."},
        {id:4, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image6.png", tittle:"THE ALEXA SHOW"},
        {id:5, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image5.png", tittle:"THE STROIES OF MA..."},
        {id:6, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image10.png", tittle:"MOTIVATION DAILY"},
    ]
    return(
        <>
        <div className='song'>
          <div className="top">
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/top%20arrow%20navigation.png" alt="" className='imgs'/>
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/User.png" alt="" className='profile'/>
          </div>
          <p>good morning</p>
          <div className="playlist">
              {playlist.filter((i) => i.id % 2 == 0).map((i)=> ( 
                <div key={i.id} className="play-op">
                    <img src={i.img_url} />
                    <p>{i.name}</p>
                    </div>
              )
              )
              }
          </div>
          <p>show you might Liked</p>
          <div className='singer'>
          {singers.map((j) => (
                <div key={j.id} className="singer-list">
                    <img src={j.url} />
                    <p>{j.tittle}</p>
                    </div>
              )
              )
              }
          </div>
        </div>
        </>
    )
}
export default Mainpage;