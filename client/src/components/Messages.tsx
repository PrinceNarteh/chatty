import { Icon } from "@iconify/react";
import ChatCard from "./ChatCard";

const Messages = () => {
  return (
    <div className="bg-light-gray p-5 rounded-md w-96 space-y-5 overflow-hidden">
      <h3 className="text-3xl font-semibold text-light-green">Messages</h3>

      {/* search */}
      <div className="bg-dark-gray text-gray-500 flex items-center gap-3 p-3 rounded-md">
        <Icon icon="mingcute:search-line" className="text-lg" />
        <input type="text" className="bg-transparent w-full outline-none" />
      </div>

      <div className="h-[calc(100vh_-_200px)] overflow-y-auto space-y-5">
        {/* Pinned messages */}
        <div className="">
          <div className="text-gray-600 flex items-center gap-2 mb-2">
            <Icon icon="ri:pushpin-fill" />
            <span>Pinned Messages</span>
          </div>

          <div className="">
            <ChatCard />
            <ChatCard />
          </div>
        </div>

        {/* All messages */}
        <div className="">
          <div className="text-gray-600 flex items-center gap-2 mb-2">
            <Icon icon="ri:pushpin-fill" />
            <span>All Messages</span>
          </div>

          <div className="">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
