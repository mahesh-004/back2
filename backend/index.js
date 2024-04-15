import express from "express";
import cors from "cors"
const app =express();
const port = process.env.PORT||3000;


// app.get("/",(req,res)=>{
//     res.send("server ready")
// });
app.use(express.static('dist'))
app.use(cors())

app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"a joke",
            content:"this is"
        },
        {
            id:2,
            title:" joke",
            content:"this  sss is"
        },
        {
            id:3,
            title:"ass joke",
            content:"this is"
        },
        {
            id:4,
            title:"a mrrmmrjoke",
            content:"this is"
        },
        {
            id:5,
            title:"a kkrkrkjoke",
            content:"this is"
        },
        {
            id:6,
            title:"a joke",
            content:"this is"
        }
    ];

    res.send(jokes)

});

app.listen(port,()=>{
    console.log(`server  at http://localhost:${port}`);
})



