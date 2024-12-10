const express = require("express")
const app = express()
app.use(express.json());

const cors = require("cors");
app.use(cors());

let singers=[
    {id:1, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image9.png", tittle:"weekly motivation"},
    {id:2, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image8.png", tittle:"MEDITATION SELF"},
    {id:3, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image7.png", tittle:"WORD BEYOND ACT.."},
    {id:4, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image6.png", tittle:"THE ALEXA SHOW"},
    {id:5, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image5.png", tittle:"THE STROIES OF MA..."},
    {id:6, url:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image10.png", tittle:"MOTIVATION DAILY"},
]

app.get("/singers",(req,res) => {
    res.json(singers)
})

app.get("/singer/:id", (req, res) => {
    const id = parseInt(req.params.id); // Convert the id to an integer
    const data = singers.find(singer => singer.id === id); // Find the singer by id
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