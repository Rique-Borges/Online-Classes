import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.sendStatus(201);
});
app.post("/register", (req,res) =>{
    res.sendStatus(200);
});
app.put("/user/henrique", (req,res) =>{
    res.sendStatus(200);
});
app.patch("/user/henrique", (req,res) =>{
    res.sendStatus(200);
});
app.delete("/user/henrique", (req,res) =>{
    res.sendStatus(200);
});
app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
})
