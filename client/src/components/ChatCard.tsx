import { Icon } from "@iconify/react";

const ChatCard = () => {
  return (
    <div className="border-y border-y-gray-800 flex items-center gap-3 p-2 hover:bg-dark-gray duration-200 cursor-pointer">
      <img
        src="/images/user-placeholder.png"
        alt=""
        className="w-12 h-12 rounded-full"
      />
      <div className="flex- items-end">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-dark-green">John Doe</h3>
          <span className="text-gray-500">1:13 AM</span>
        </div>
        <div className="flex">
          <p className="line-clamp-1 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
          </p>
          <Icon
            icon="game-icons:check-mark"
            className="text-dark-green text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
