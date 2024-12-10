const express = require("express")
const app = express()
app.use(express.json());

const cors = require("cors");
app.use(cors());

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

    app.get("/vedio",(req,res) => {
        res.json(vedio)
    })

    app.get("/vedio/:id", (req, res) => {
        const id = parseInt(req.params.id); 
        const data = singers.find(vedio => vedio.id === id); 
        if (data) {
            res.json(data);
        } else {
            res.status(404).send("DATA not found!");
        }
    });

    const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})