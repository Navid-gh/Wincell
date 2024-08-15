import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { addArticle } from "../../api/article";
import { addCourse } from "../../api/course";
import Button from "../../components/UI/Button";
const Add = () => {
  const { parent } = useParams();
  const queryClient = useQueryClient();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const shortTextRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const imagesRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLInputElement | null>(null);
  const sortRef = useRef<HTMLInputElement | null>(null);
  const ownerNameRef = useRef<HTMLInputElement | null>(null);
  const ownerLogoRef = useRef<HTMLInputElement | null>(null);
  const { token } = useAuth();
  const auth = useAuthHooks();

  if (parent === "articles") {
    const timeRef = useRef<HTMLInputElement | null>(null);
    const ownerDescRef = useRef<HTMLInputElement | null>(null);
    const addArticleMutation = useMutation({
      mutationFn: () =>
        addArticle(
          { token, ...auth },
          {
            shortText: shortTextRef.current!.value,
            title: titleRef.current!.value,
            category: categoryRef.current!.value.split(",") || [],
            images: imagesRef.current?.value.split(",") || [],
            author: {
              image: ownerLogoRef.current!.value,
              name: ownerNameRef.current!.value,
              desc: ownerDescRef.current!.value,
            },
            description: textRef.current!.value,
            sortByNumber: Number(sortRef.current!.value),
            timeNeeded: timeRef.current!.value,
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
        <input type="text" placeholder="آیدی دسته بندی ها" ref={categoryRef} />
        <input type="text" placeholder="عکس ها" ref={imagesRef} />
        <input type="text" placeholder="شماره ترتیب" ref={sortRef} />
        <input type="text" placeholder="زمان مورد نیاز" ref={timeRef} />
        <textarea
          placeholder="مقاله ی خود را در فرمت مارکداون بنویسید"
          cols={30}
          rows={10}
          ref={textRef}
        ></textarea>
        <input type="text" placeholder="نام نویسنده" ref={ownerNameRef} />
        <input type="text" placeholder="توضیح نویسنده" ref={ownerDescRef} />
        <input type="text" placeholder="عکس نویسنده" ref={ownerLogoRef} />
        <Button
          intent={"secondary"}
          size={"fit"}
          className="bg-pink max-w-fit"
          disabled={addArticleMutation.isPending}
          onClick={() => {
            addArticleMutation.mutate();
          }}
        >
          تایید
        </Button>
      </div>
    );
  } else if (parent === "courses") {
    const priceRef = useRef<HTMLInputElement | null>(null);
    const discountRef = useRef<HTMLInputElement | null>(null);
    const typeRef = useRef<HTMLSelectElement | null>(null);
    const levelRef = useRef<HTMLSelectElement | null>(null);
    const spotRef = useRef<HTMLInputElement | null>(null);
    const LangRef = useRef<HTMLInputElement | null>(null);
    const neededTimeRef = useRef<HTMLInputElement | null>(null);
    const prerequisitesTxtRef = useRef<HTMLInputElement | null>(null);
    const prerequisitesRef = useRef<HTMLInputElement | null>(null);

    const addCourseMutation = useMutation({
      mutationFn: () =>
        addCourse(
          { token, ...auth },
          {
            shortText: shortTextRef.current!.value,
            title: titleRef.current!.value,
            category: categoryRef.current!.value.split(",") || [],
            images: imagesRef.current?.value.split(",") || [],
            discount: Number(discountRef.current!.value),
            level: levelRef.current!.value,
            price: Number(priceRef.current!.value),
            type: typeRef.current!.value as "online" | "offline",
            spotPlayerID: spotRef.current!.value,
            Description: textRef.current!.value,
            language: LangRef.current!.value,
            neededTime: {
              hour: Number(neededTimeRef.current!.value.split(":")[0]),
              minute: Number(neededTimeRef.current!.value.split(":")[1]),
            },
            owner: {
              image: ownerLogoRef.current!.value,
              name: ownerNameRef.current!.value,
            },
            prerequisitesText: prerequisitesTxtRef.current!.value,
            prerequisites: prerequisitesRef.current!.value
              ? prerequisitesRef.current!.value.split(",")
              : [],
            sortByNumber: Number(sortRef.current!.value),
          }
        ),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["courses"] });
        toast.success("موفقیت آمیز");
      },
      onError: (err) => {
        console.log(err);
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
        <input type="text" placeholder="آیدی دسته بندی ها" ref={categoryRef} />
        <input type="number" placeholder="تخفیف" ref={discountRef} />
        <input type="text" placeholder="عکس ها" ref={imagesRef} />
        <input type="text" placeholder="شماره ترتیب" ref={sortRef} />
        <select ref={typeRef}>
          <option value="offline">اسپات پلیر</option>
          <option value="online">انلاین</option>
        </select>
        <select ref={levelRef}>
          <option value="مبتدی">مبتدی</option>
          <option value="متوسط">متوسط</option>
          <option value="پیشرفته">پیشرفته</option>
        </select>
        <input type="text" placeholder="زبان دوره" ref={LangRef} />
        <input
          type="text"
          placeholder="زمان مورد نیاز دوره به صورت ساعت:دقیقه"
          ref={neededTimeRef}
        />
        <input type="text" placeholder="نام برگزار کننده " ref={ownerNameRef} />
        <input
          type="text"
          placeholder="لوگو برگذار کننده "
          ref={ownerLogoRef}
        />
        <input
          type="text"
          placeholder="متن پیش نیاز"
          ref={prerequisitesTxtRef}
        />
        <input
          type="text"
          placeholder="آیدی دوره های پیش نیاز به صورت جداشده با کاما"
          ref={prerequisitesRef}
        />
        <input type="text" placeholder="ایدی اسپات پلیر" ref={spotRef} />
        <Button
          intent={"secondary"}
          size={"fit"}
          className="bg-pink max-w-fit"
          disabled={addCourseMutation.isPending}
          onClick={() => {
            addCourseMutation.mutate();
          }}
        >
          تایید
        </Button>
      </div>
    );
  }
};

export default Add;
