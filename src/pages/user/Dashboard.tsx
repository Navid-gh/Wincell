import CardsWrapper from "../../components/CardsWrapper";
import Course from "../../components/UI/icons/Course";
import { cn } from "../../utils/lib/cn";
import { bgTextFull, textTitle4 } from "../../constants/styles";
import FilledHeart from "../../components/UI/icons/FilledHeart";
import DoubleArrow from "../../components/UI/icons/DoubleArrow";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className={cn(
            "bg-main-secondary-bg border border-main-primary-text",
            bgTextFull
          )}
        >
          <Course className="w-4 h-4" />
          <h2 className={textTitle4}>آخرین دوره‌های من</h2>
        </div>
        <CardsWrapper
          type="course"
          linkUrl="courses"
          getterFunc={() => new Promise((resolve) => resolve([]))}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div
          className={cn(
            "bg-main-secondary-bg border border-main-primary-text",
            bgTextFull
          )}
        >
          <FilledHeart className="w-4 h-4" />
          <h2 className={textTitle4}>آخرین پسندیده ها</h2>
        </div>
        <div className="flex flex-col gap-4 pr-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 items-center max-w-fit border-b-2 border-main-primary-text">
              <DoubleArrow className="w-4 h-4" />
              <h3>دوره‌ها</h3>
            </div>
            <CardsWrapper
              type="course"
              linkUrl="courses"
              getterFunc={() => new Promise((resolve) => resolve([]))}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 pr-4">
          <div className="flex gap-1 items-center max-w-fit border-b-2 border-main-primary-text">
            <DoubleArrow className="w-4 h-4" />
            <h3>مقالات</h3>
          </div>
          <CardsWrapper
            type="article"
            linkUrl="articles"
            getterFunc={() => new Promise((resolve) => resolve([]))}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
