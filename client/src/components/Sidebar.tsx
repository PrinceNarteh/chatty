import React from "react";
import { Icon } from "@iconify/react";

const links = [
  "solar:graph-new-outline",
  "ph:chat-circle-dots",
  "solar:phone-linear",
  "ph:users-three",
  "radix-icons:dashboard",
  "solar:remove-folder-linear",
  "material-symbols:settings-outline",
];

const Sidebar = () => {
  return (
    <div className="bg-light-gray px-5 py-10 rounded-md flex flex-col justify-between items-center">
      <div className="space-y-5">
        <div className="p-2 rounded-md">
          <img src="/images/logo.png" alt="" className="w-5 h-5" />
        </div>
        {links.map((link, idx) => (
          <div
            key={idx}
            className="p-2 bg-light-gray rounded-md text-white flex items-center justify-center text-lg cursor-pointer hover:bg-light-green hover:text-dark-gray duration-300"
          >
            <Icon icon={link} />
          </div>
        ))}
      </div>
      <div className="w-7 h-7">
        <img src="/images/user-placeholder.png" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
