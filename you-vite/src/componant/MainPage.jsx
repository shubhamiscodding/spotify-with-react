function MainPage(){
    let vedio=[
        {id:1,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-8.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:2,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-9.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:3,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:4,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-7.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:5,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-6.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:6,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-5.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:7,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-4.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:8,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-3.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:9,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-2.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:10,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-1.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:11,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-11.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"},
        {id:12,
            url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-10.png",
            url2:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png",
            dis:"Bahubali | coke studio bangal|seson one | ritu X nandita", channel:"coke studio bangal",view:"1.5mil", days:"2 days ago"}
        ]
    return(
    <>
    <div className="main">
    <div className="box">
            {vedio.map((i)=>(
                <div key={i.id} className="flex">
                    <img src={i.url} alt="#"></img>
                    <div className="tittle">
                        <img src={i.url2} alt="" />
                        <p>{i.dis}</p>
                    </div>
                    <div className="info">
                        <p>{i.channel}
                            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="#" />
                        </p>
                        <pre>{i.view}  {i.days}</pre>
                    </div>
                </div>
            ))}
    </div>
    </div>
    </>
    )
}

export default MainPage;