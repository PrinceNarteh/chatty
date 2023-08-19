import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const Main = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const [chat, setChat] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  // handle connection
  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  // add user to online users
  useEffect(() => {
    if (!socket) return;
    socket.emit("addUser", "123");

    socket.emit("getOnlineUsers", (users: any) => {
      setOnlineUser(users);
    });

    return () => {
      socket.off("getOnlineUsers");
    };
  }, [socket]);

  // send message
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket?.emit("sendMessage", message);

    setMessage("");
  };

  // listen to incoming messages
  useEffect(() => {
    if (!socket) return;
    socket.on("receiveMessage", (newChat) => {
      setChat((prevChat) => [...prevChat, newChat]);
    });
  }, [socket]);

  return (
    <main className="flex-1">
      <div className="h-14 flex items-center gap-3 pl-5">
        <img src="/images/logo.png" className="w-8 h-8" />
        <span className="text-white text-2xl">Chatty</span>
      </div>
      <div className="bg-light-gray h-[calc(100vh_-_56px)] rounded-tl-lg p-5">
        <h1>Chatty App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Send</button>
        </form>
      </div>
    </main>
  );
};

export default Main;
