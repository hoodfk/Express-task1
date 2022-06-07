const Express = require ("express");
 let app = Express(); 

 const port = 9001;

 app.use(Express.json())

 app.get ("/search" , (req , res)=>{
    console.log(req.query)
      res.status(200).json({
          message:"User Found"
      })
 })

 app.post("/post" , (req , res)=>{
     console.log(req.body)
     if (req.body.username === "" || req.body.password === ""){
        return res.status(200).json({message:"username or password cant be empty"})
     }
    res.status(200).json({
     message: "User created"
    })
 })

 app.put("/put" , (req , res)=>{
     console.log(req.body)
    res.status(200).json({
     message:"Username has been changed"
    })
 })

 
 app.delete("/id" , (req , res)=>{
     console.log(req.query)
     if (req.query.id === ""){
    return res.status(200).json({
     message:"id cant be empty"
    })
}
    res.status(200).json({
        message: "User deleted"
       })
 })
 
 
















app.listen(port , ()=>{
    console.log("listening on port 9001")
}
)