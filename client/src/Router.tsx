import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Router = () => {
  return (
    <div className="bg-dark-gray">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
