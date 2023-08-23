import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Messages from "../components/Messages";
import ChatArea from "../components/ChatArea";

function Chat() {
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
    <>
      <div className="h-screen w-screen bg-dark-gray flex gap-5 p-5">
        <Sidebar />
        <Messages />
        <ChatArea />
        {/* <Main /> */}
      </div>
    </>
  );
}

export default Chat;
