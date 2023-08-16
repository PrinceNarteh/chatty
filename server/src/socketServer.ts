import { Server } from "http";
import { Server as SocketServer, Socket } from "socket.io";

const socketServer = (server: Server) => {
  const io = new SocketServer(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", async (socket: Socket) => {
    console.log(`User connect with ID ${socket.id}`);
  });
};

export default socketServer;
