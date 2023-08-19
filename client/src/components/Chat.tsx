import { Icon } from "@iconify/react";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
];

const Chat = () => {
  return (
    <div className="flex-1 bg-light-gray p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <img src="/images/1.jpg" alt="" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-3xl text-light-green">Prinart Studio</h2>
            <p className="text-gray-500">Kwame Tawiah Typing...</p>
          </div>
        </div>
        <div className="relative flex  items-center h-12">
          <div className="shrink-0 w-32">
            {images.map(
              (image, idx) =>
                idx < 3 && (
                  <div
                    className="top-1 absolute w-10 h-10 shrink-0"
                    style={{ left: `${idx * 20}px` }}
                  >
                    <img
                      src={image}
                      key={idx}
                      alt=""
                      className="rounded-full border-2 shrink-0"
                    />
                  </div>
                )
            )}
            {images.length >= 4 && (
              <div className="w-10 h-10 rounded-full bg-white absolute top-1 flex justify-center items-center left-[60px]">
                +{images.length - 3}
              </div>
            )}
          </div>
          <div className="flex text-3xl text-gray-500 gap-5">
            <Icon icon="fluent:video-20-regular" className="cursor-pointer" />
            <Icon icon="solar:phone-linear" className="cursor-pointer" />
            <Icon icon="ph:dots-three-circle" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-dark-gray rounded-md p-1">
        <div className="max-w-md flex gap-2 mt-4 rounded-b-2xl rounded-tr-2xl overflow-hidden">
          <img src="/images/2.jpg" alt="" className="rounded-full w-12 h-12" />
          <div className="bg-light-gray ">
            <div className="px-2 py-2 text-xs flex justify-between bg-gray-800 text-[#14FFEC]">
              <h3 className="font-bold">John Doe</h3>
              <span>4:32 pm</span>
            </div>
            <div className="min-w-[150px] p-2 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              mollitia veritatis ullam ipsa fugit fuga, aliquam accusamus optio
              excepturi saepe quidem ab voluptas rem odio architecto aliquid
              obcaecati! Cum, rerum.
            </div>
          </div>
        </div>
      </div>
      <div>footer</div>
    </div>
  );
};

export default Chat;
