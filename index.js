import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app=express();
const port=3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const __dirname = dirname(fileURLToPath(import.meta.url));


app.get("/index",(req,res)=>{
    res.render("index.ejs");
});

app.get("/bookings",(req,res)=>{
    res.render("bookings.ejs");
});
app.get("/about_us",(req,res)=>{
    res.render("aboutus.ejs");
});
app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
});

app.post("/registration",(req,res)=>{
    const fName=req.body['fName'];
    const lName=req.body['lName'];
    const contactNo=req.body['contactNo'];
    const email=req.body['email'];
    const pass=req.body['pass'];
    const repass=req.body['repass'];

    if (pass!=repass) {
        res.render("signup.ejs",{
            checkPassword:1
        })
    }
    
    if (email=="sha@gmail.com") {
        
        res.render("login.ejs",{
            userExist:1
        });

    }else{
        ;
        res.render("login.ejs",{
            userExist:0
        });
    }
    
})


app.listen(port,()=>{
    console.log(`Server started in port ${port}`);
});