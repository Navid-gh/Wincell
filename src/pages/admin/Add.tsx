import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { addArticle } from "../../api/article";
import { addCourse } from "../../api/course";
const Add = () => {
  const { parent } = useParams();
  const queryClient = useQueryClient();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const shortTextRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const imagesRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLInputElement | null>(null);
  const sortRef = useRef<HTMLInputElement | null>(null);
  const { token } = useAuth();
  const auth = useAuthHooks();

  if (parent === "Articles") {
    const editArticleMutation = useMutation({
      mutationFn: () =>
        addArticle(
          { token, ...auth },
          {
            short_text: shortTextRef.current!.value,
            title: titleRef.current!.value,
            category: categoryRef.current!.value,
            images: imagesRef.current?.value.split(",") || [],
            author: {
              image: "",
              name: "Udemy",
            },
            description: textRef.current!.value,
            sortByNumber: Number(sortRef.current!.value),
          }
        ),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["articles"] });
        toast.success("موفقیت آمیز");
      },
      onError: (err) => {
        toast.error("خطا در برقراری ارتباط");
        console.log(err);
      },
    });
    return (
      <div className="flex flex-col gap-6">
        <input type="text" placeholder="title" ref={titleRef} />
        <input
          type="text"
          placeholder="متنی کوتاه برای نمایش در کنار سر تیتر"
          ref={shortTextRef}
        />
        <textarea
          placeholder="مقاله ی خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          ref={textRef}
        ></textarea>
        <button
          className="bg-pink max-w-fit"
          disabled={editArticleMutation.isPending}
          onClick={() => {
            editArticleMutation.mutate();
          }}
        >
          تایید
        </button>
      </div>
    );
  } else if (parent === "Courses") {
    const priceRef = useRef<HTMLInputElement | null>(null);
    const discountRef = useRef<HTMLInputElement | null>(null);
    const typeRef = useRef<HTMLSelectElement | null>(null);
    const levelRef = useRef<HTMLSelectElement | null>(null);
    const spotRef = useRef<HTMLInputElement | null>(null);

    const editCourseMutation = useMutation({
      mutationFn: () =>
        addCourse(
          { token, ...auth },
          {
            short_text: shortTextRef.current!.value,
            title: titleRef.current!.value,
            category: categoryRef.current!.value,
            images: imagesRef.current?.value.split(",") || [],
            discount: Number(discountRef.current!.value),
            level: levelRef.current!.value,
            price: Number(priceRef.current!.value),
            type: typeRef.current!.value as "online" | "offline",
            spotPlayerID: spotRef.current!.value,
            Description: textRef.current!.value,
            language: "",
            neededTime: {
              hour: 0,
              minute: 0,
            },
            owner: {
              image: "",
              name: "Udemy",
            },
            prerequisitesTxt: "",
            prerequisites: [],
            sortByNumber: Number(sortRef.current!.value),
          }
        ),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["courses"] });
        toast.success("موفقیت آمیز");
      },
      onError: () => {
        toast.error("خطا در برقراری ارتباط");
      },
    });
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4"></div>
        <input type="text" placeholder="title" ref={titleRef} />
        <input
          type="text"
          placeholder="متنی کوتاه برای نمایش در کنار سر تیتر"
          ref={shortTextRef}
        />
        <textarea
          placeholder="توضیحات دوره خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          ref={textRef}
        ></textarea>
        <input type="number" placeholder="قیمت اصلی دوره" ref={priceRef} />
        <input type="number" placeholder="تخفیف" ref={discountRef} />
        <select ref={typeRef}>
          <option value="offline">اسپات پلیر</option>
          <option value="online">انلاین</option>
        </select>
        <select ref={levelRef}>
          <option value="مبتدی">مبتدی</option>
          <option value="متوسط">متوسط</option>
          <option value="پیشرفته">پیشرفته</option>
        </select>
        <input type="text" placeholder="ایدی اسپات پلیر" ref={spotRef} />
        <button
          className="bg-pink max-w-fit"
          disabled={editCourseMutation.isPending}
          onClick={() => {
            editCourseMutation.mutate();
          }}
        >
          تایید
        </button>
      </div>
    );
  }
};

export default Add;
