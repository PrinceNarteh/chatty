import { Server } from "http";
import { Server as SocketServer, Socket } from "socket.io";

let onlineUsers: {
  userId: string;
  socketId: string;
}[] = [];

const socketServer = (server: Server) => {
  const io = new SocketServer(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", async (socket: Socket) => {
    // listen for connection and add user to online user and
    // send online users to all connected clients
    socket.on("addUser", (userId: string) => {
      !onlineUsers.some((user) => user.userId === userId) &&
        onlineUsers.push({
          userId,
          socketId: socket.id,
        });

      // send onlineUser to connected clients
      io.emit("getOnlineUsers", onlineUsers);
    });

    socket.on("sendMessage", (payload) => {
      socket.broadcast.emit(payload);
    });

    // handle disconnect
    socket.on("disconnect", () => {
      // remove user disconnected
      onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);

      // send onlineUser to connected clients
      io.emit("getOnlineUsers", onlineUsers);
    });
  });
};

export default socketServer;
