import React from "react";

const Sidebar = () => {
  return (
    <div className="w-80">
      <div className="h-14 flex items-center gap-3 pl-5">
        <img src="/images/logo.png" className="w-8 h-8" />
        <span className="text-white text-2xl">Chatty</span>
      </div>
      <div className="bg-light-gray h-[calc(100vh_-_56px)] rounded-tr-lg"></div>
    </div>
  );
};

export default Sidebar;
