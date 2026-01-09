// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write("I Am Rakshit");
//         res.end();
//     }

//     if (req.url === '/display') {
//         res.write("I Am Rakshit How Are You");
//         res.end();
//     }
// });

// const PORT = 8606;
// server.listen(PORT, () => {
//     console.log(`Server Running At ${PORT}`);

// })

const http=require("http")

const server=http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);

    res.writeHead(200,{"content-Type":"application/json"})
    res.write(JSON.stringify({id:101,name:"Rakshit"}))
    res.end()
    
})

const PORT = 8606;
server.listen(PORT, () => {
    console.log(`Server Running At ${PORT}`);

})