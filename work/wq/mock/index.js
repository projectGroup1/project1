// import mockjs from "mockjs"
export default function(app){
  app.get("/api",function(req,res,next){
    res.send("22")
  })
}