import { useEffect } from "react";
import { useState } from "react";

function MainPage(){
    
    const getPosts = async () => {
        const response = await fetch("http://localhost:3000/vedio", {
            method : "GET"
        });
        return response.json();
    }
    const [data,setData] = useState([]);

    useEffect(() => {
        getPosts().then((Posts) => setData(Posts))
    },[])

    return(
    <>
    <div className="main">
    <div className="box">
            {data.map((i)=>(
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