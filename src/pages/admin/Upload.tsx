import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { addImage, getImages } from "../../api";
import Button from "../../components/UI/Button";
import { useQuery } from "@tanstack/react-query";
import WithLoaderAndError from "../../components/WithLoaderAndError";

const Upload = () => {
  const [imgUrls, setImgUrls] = useState<string[] | null>(null);
  const imagesRef = useRef<HTMLInputElement | null>(null);
  const { token } = useAuth();
  const auth = useAuthHooks();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["codes"],
    queryFn: () => getImages({ token, ...auth }),
  });
  const submitImages = async () => {
    if (imagesRef.current?.files) {
      const images = Array.from(imagesRef.current.files);
      const loadToast = toast.loading("درحال بارگذاری");
      try {
        const res = await addImage({ token, ...auth }, images);
        toast.success("بارگذاری شد");
        setImgUrls([...res]);
      } catch (err) {
        console.log(err);
        toast.error("خطا در بارگذاری");
      } finally {
        toast.dismiss(loadToast);
      }
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h1>عکس های خود را اپلود کنید</h1>
      <p>پس از ثبت از لینک های داده شده برای استفاده از عکس ها استفاده کنید.</p>
      <input type="file" ref={imagesRef} multiple />
      <Button intent={"primary"} size={"fit"} onClick={submitImages}>
        ثبت عکس ها
      </Button>
      <ul className="flex flex-col gap-2">
        {imgUrls?.map((img, idx) => (
          <li key={idx}>{img}</li>
        ))}
      </ul>
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <ul className="flex flex-col gap-6">
          {!isLoading && data?.map(({}) => <></>)}
        </ul>
      </WithLoaderAndError>
    </div>
  );
};

export default Upload;
