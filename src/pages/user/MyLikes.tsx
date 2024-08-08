import { cn } from "../../utils/lib/cn";
import DoubleArrow from "../../components/UI/icons/DoubleArrow";
import { bgTextFull, textTitle4 } from "../../constants/styles";
import FilledHeart from "../../components/UI/icons/FilledHeart";
import Cards from "../../components/UI/Cards";
import { useAuth } from "../../hooks/useAuth";

const MyLikes = () => {
  const { data } = useAuth();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className={cn(
            "bg-main-secondary-bg border border-main-primary-text",
            bgTextFull
          )}
        >
          <FilledHeart className="w-4 h-4" />
          <h1 className={textTitle4}>پسندیده ها</h1>
        </div>
        <div className="flex flex-col gap-4 pr-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 items-center max-w-fit border-b-2 border-main-primary-text">
              <DoubleArrow className="w-4 h-4" />
              <h2>دوره‌ها</h2>
            </div>
            <Cards type={"course"} array={data.likes.course} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-1 items-center max-w-fit border-b-2 border-main-primary-text">
            <DoubleArrow className="w-4 h-4" />
            <h2>مقالات</h2>
          </div>
          <Cards type={"article"} array={data.likes.blog} />
        </div>
      </div>
    </div>
  );
};

export default MyLikes;
