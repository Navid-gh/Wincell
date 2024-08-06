import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { addSlide, deleteSlide, getSlides } from "../../api";
import toast from "react-hot-toast";
import { useRef } from "react";
import Button from "../../components/UI/Button";

const Slides = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const subTitleRef = useRef<HTMLInputElement>(null);
  const imagesRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const queryClient = useQueryClient();

  const { token } = useAuth();
  const auth = useAuthHooks();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["slides"],
    queryFn: () => getSlides(),
  });
  const addSlideMutation = useMutation({
    mutationFn: () =>
      addSlide(
        { token, ...auth },
        {
          title: titleRef.current!.value,
          subtitle: subTitleRef.current?.value,
          images: imagesRef.current?.value.split(",") || [],
          url: urlRef.current?.value,
          description: descriptionRef.current?.value,
        }
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slides"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const removeSlideMutation = useMutation({
    mutationFn: (id: string) => deleteSlide({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slides"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <h1>اسلایدر ها</h1>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="عنوان" ref={titleRef} />
        <input type="text" placeholder="زیر عنوان" ref={subTitleRef} />
        <textarea placeholder="توضیحات" ref={descriptionRef}></textarea>
        <input type="text" placeholder="لینک عکس ها" ref={imagesRef} />
        <input type="text" placeholder="لینک صفحه مورد نظر" ref={urlRef} />
        <Button
          intent={"primary"}
          size={"fit"}
          className="max-w-fit bg-pink"
          onClick={() => addSlideMutation.mutate()}
        >
          اضافه
        </Button>
      </div>
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <ul className="flex flex-col gap-6">
          {!isLoading &&
            data?.map(({ _id, images }) => (
              <li key={_id} className="flex flex-col gap-3">
                <img src={images[0]} alt="images" className="w-44 h-44" />
                <div className="flex gap-4">
                  <button
                    className="max-w-fit bg-pink"
                    onClick={() => removeSlideMutation.mutate(_id)}
                  >
                    حذف
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </WithLoaderAndError>
    </div>
  );
};

export default Slides;
