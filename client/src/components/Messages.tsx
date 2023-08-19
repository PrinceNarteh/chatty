import { Icon } from "@iconify/react";

const Messages = () => {
  return (
    <div className="bg-light-gray p-5 rounded-md w-96 space-y-5">
      <h3 className="text-3xl font-semibold text-light-green">Messages</h3>

      {/* search */}
      <div className="bg-dark-gray text-gray-500 flex items-center gap-3 p-3 rounded-md">
        <Icon icon="mingcute:search-line" className="text-lg" />
        <input type="text" className="bg-transparent w-full outline-none" />
      </div>

      {/* Pinned messages */}
      <div className="">
        <div className="text-gray-600 flex items-center gap-2 mb-2">
          <Icon icon="ri:pushpin-fill" />
          <span>Pinned Messages</span>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3 my-1 p-2 hover:bg-dark-gray rounded-md duration-200 cursor-pointer">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste,
                </p>
                <Icon
                  icon="game-icons:check-mark"
                  className="text-dark-green text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 my-1">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste,
                </p>
                <Icon
                  icon="game-icons:check-mark"
                  className="text-dark-green text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 my-1">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste,
                </p>
                <Icon
                  icon="game-icons:check-mark"
                  className="text-dark-green text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 my-1">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste,
                </p>
                <Icon
                  icon="game-icons:check-mark"
                  className="text-dark-green text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 my-1">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste,
                </p>
                <Icon
                  icon="game-icons:check-mark"
                  className="text-dark-green text-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All messages */}
      <div className="">
        <div className="text-gray-600 flex items-center gap-2 mb-2">
          <Icon icon="ri:pushpin-fill" />
          <span>All Messages</span>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3 my-1 p-2 hover:bg-dark-gray rounded-md duration-200 cursor-pointer">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste,
                </p>
                <Icon
                  icon="game-icons:check-mark"
                  className="text-dark-green text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 my-1">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste,
                </p>
                <Icon
                  icon="game-icons:check-mark"
                  className="text-dark-green text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 my-1">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste,
                </p>
                <Icon
                  icon="game-icons:check-mark"
                  className="text-dark-green text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 my-1">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste,
                </p>
                <Icon
                  icon="game-icons:check-mark"
                  className="text-dark-green text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 my-1">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iste,
                </p>
                <Icon
                  icon="game-icons:check-mark"
                  className="text-dark-green text-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
