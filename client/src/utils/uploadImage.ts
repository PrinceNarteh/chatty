import toast from "react-hot-toast";

export default async function ({
  image,
  setUploadingImg,
}: {
  image: File;
  setUploadingImg: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "chatty");
  try {
    setUploadingImg(true);
    let res = await fetch(
      "https://api.cloudinary.com/v1_1/prinart/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const url = await res.json();
    setUploadingImg(false);
    return url.secure_url;
  } catch (error: any) {
    setUploadingImg(false);
    toast.error(error.message);
  }
}
