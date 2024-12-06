function Header(){
    let obj=[
        {name:"all",id:1},
        {name:"cook studio",id:2},
        {name:"ux",id:3},
        {name:"case comedy",id:4},
        {name:"music",id:5},
        {name:"tour",id:6},
        {name:"tech",id:7},
        {name:"lofi music",id:8},
        {name:"iphone 13",id:9},
        {name:"user interface design",id:10},
    ]
    return(
        <>
        <div className="header">
            <div className="header-top">
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/search.png" alt="#" />
                </div>
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/mic.png" alt="#" className="headerimg"/>
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/more.png" alt="#" className="flexend"/>
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/bell.png" alt="#" className="headerimg"/>
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/create.png" alt="#" className="headerimg"/>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true" alt="#" className="headerimg"/>
            </div>
            <div className="header-bottom">
                <div className="section">
                    {obj.map((i)=>(
                        <div key={i.id} className="sugg">
                            <p>{i.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Header;