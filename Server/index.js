import express from "express"
import mysql from "mysql"
const app = express();
app.use(express.json())
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"180members"
})
db.connect((err)=>{
   if(err){
    console.log("error connecting the database",err)
   }
   else{
    console.log("connected to the database 180members")
   }
})
app.get("/members",(req , res)=>{
   const q = "SELECT * FROM MEMBERS";
   db.query(q ,(err , data)=>{
      if(err)return res.json(err)
      return res.json(data)
   })
})
app.post("/members",(req , res)=>{
   const {name, score, committee} = req.body;
   const q = "INSERT INTO MEMBERS (name,score,committee) values(? , ? , ?) "
   const values = [name , score , committee] ;
   db.query(q,values,(err , data)=>{
    if(err)return res.json(err)
    // res.json(data)
     res.send("data has been sent successfully")
   })
}) 
app.get("/members/:id", (req , res)=>{
    const id = req.params.id ;
    const q = "SELECT* FROM MEMBERS WHERE id = ?";
    db.query(q , [id] , (err , data)=>{
        if(err) return res.send(err)
        res.json(data)
    })
})
app.get("/members/committee/:committee", (req , res) => {
    console.log("Request received for committee:", req.params.committee);
    const committee = req.params.committee;
    console.log("Committee value:", committee);
    
    const q = "SELECT * FROM MEMBERS where committee like ? ";
    db.query(q,[`%${committee}%`], (err, data) => {
        if (err) return res.send(err);
        console.log("Data returned:", data);
        res.json(data);
    });
});

app.delete("/members/:id" , (req , res)=>{
    const id= req.params.id ;
    const q = `DELETE FROM MEMBERS WHERE id = ?`
    db.query(q ,[id], (err)=>{
        if(err) return res.json(err)
        res.send("member has been deleted successfully")
    })
})

app.patch("/members/:id" , (req , res)=>{
    const {id} = req.params;
    const updates = req.body;
    const keystoupdate = [];
    const values = [];
   
    for(let key in updates){
        keystoupdate.push(`${key} = ? `);
        values.push(updates[key]);
    }
    values.push(id)
    const q = `UPDATE  members SET ${keystoupdate.join(',')} Where id = ?`
    console.log(q)
    db.query(q , values , (err)=>{
        if(err) return res.json(err)
        res.send("data has been updated successfully")
    })
})

app.listen(8800 , ()=>{
    console.log("connected to backend");
})
