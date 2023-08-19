import { Icon } from "@iconify/react";

const links = [
  { label: "Reels", icon: "solar:graph-new-outline", path: "" },
  { label: "Messages", icon: "ph:chat-circle-dots", path: "" },
  { label: "Call", icon: "solar:phone-linear", path: "" },
  { label: "Groups", icon: "ph:users-three", path: "" },
  { label: "Dashboard", icon: "radix-icons:dashboard", path: "" },
  { label: "Files", icon: "solar:remove-folder-linear", path: "" },
  { label: "Settings", icon: "material-symbols:settings-outline", path: "" },
];

const Sidebar = () => {
  return (
    <div className="bg-light-gray p-5 rounded-md flex flex-col justify-between w-16 overflow-hidden hover:w-48 duration-300">
      <div className="space-y-5">
        <div className="w-7 h-7 flex items-center gap-5 text-white pl-2">
          <img src="/images/logo.png" alt="" className="shrink-0" />
          <span className="font-bold">Chatty</span>
        </div>
        {links.map((link, idx) => (
          <div
            key={idx}
            className="p-2 bg-light-gray rounded-md text-white flex items-center justify-start gap-5 text-lg cursor-pointer hover:bg-light-green hover:text-dark-gray duration-300"
          >
            <Icon icon={link.icon} className="shrink-0" />
            <span>{link.label}</span>
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
