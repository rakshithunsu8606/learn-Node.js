const { createServer } = require('node:http');
const { Server } = require('socket.io');
const cors = require("cors");
const { group } = require('node:console');

const createSocket = () => {
    try {
        console.log("ok");

        const io = new Server({
            cors: {
                origin: "http://localhost:5173"
            }
        });

        io.on('connection', (socket) => {
            socket.emit('Welcome', 'Welcome to Our Chat')
            console.log('a user connected', socket.id);
            socket.on('SendMsg', ({to,msg}) => {
                console.log('to,msg:',to,msg);     
                
                io.to(to).emit("Receiver-Send",msg)
            })

            socket.on('CreateGroup',(group)=>{
                socket.join(group)
            })
            
        });


        // io.on("user-message", (values) => {
        //     console.log("A New User Message", values);
        // })


        io.listen(5000);


    } catch (error) {
        console.log(error);

    }
}

module.exports = createSocket