import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket?.emit("sendMessage", message);

    setMessage("");
  };

  return (
    <>
      <h1>Chatty App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </>
  );
}

export default App;
