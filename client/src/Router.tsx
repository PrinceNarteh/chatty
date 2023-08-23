import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Router = () => {
  return (
    <div className="bg-dark-gray">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Chat} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
