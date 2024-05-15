const jsonServer = require("json-server")

const EmpServer = jsonServer.create()

const middleWare = jsonServer.defaults()

const route = jsonServer.router('db.json')

const PORT = 3000 || process.env.PORT

EmpServer.use(middleWare)
EmpServer.use(route)
EmpServer.listen(PORT,()=>{
    console.log(`Emp server started at port ${PORT} waiting for client request`);
})