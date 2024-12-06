function SideBar(){
    let option1=[
        {no:1, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/home.png", name:"Home"},
        {no:2, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/explore.png", name:"Explore"},
        {no:3, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/shorts.png", name:"Shorts"},
        {no:4, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/subscription.png", name:"Subscription"},
    ]
    let option2=[
        {id:1, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/library.png", name:"library"},
        {id:2, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/history.png", name:"history"},
        {id:3, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/your_video.png", name:"your video"},
        {id:4, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/watch_later.png", name:"watch later"},
        {id:5, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/liked.png", name:"liked"},
        {id:6, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/down_arrow.png", name:"Show more"},
    ]
    let option3=[
        {id:1, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201.png", name:"Nadir On GO"},
        {id:2, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png", name:"Coke STUDIO"},
        {id:3, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(2).png", name:"MKBHD"},
        {id:4, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(3).png", name:"FIGMA"},
        {id:5, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(4).png", name:"ATC Android"},
        {id:6, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(5).png", name:"Alux.com"},
    ]
    return(
        <>
            <div className="side-section">
                <div className="logo">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/hambarger.png" alt="#" />
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Youtube%20logo.png" alt="#" className="logo1"/>
                </div>
                <div className="option-icon">
                {option1.map((sidebaroption) => (
                    <div key={sidebaroption.no} className="icons">
                        <img src={sidebaroption.url} alt="#" />
                        <p>{sidebaroption.name}</p>
                    </div>
                ))}
                </div>
                <hr className="line"/>
                <div className="option-icon">
                {option2.map((sidebaroption2) => (
                    <div key={sidebaroption2.id} className="icons">
                        <img src={sidebaroption2.url} alt="#" />
                        <p>{sidebaroption2.name}</p>
                    </div>
                ))}
                </div>
                <hr className="line"/>
                <div className="option-icon">
                    {option3.map((sideoption3)=>(
                        <div key={sideoption3.id} className="icons">
                            <img src={sideoption3.url} alt="#" />
                            <p>{sideoption3.name}</p>
                        </div>
                    ))}
                </div>
            
            </div>
        </>
    )
}

export default SideBar;