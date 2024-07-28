import { MouseEvent, memo, useEffect } from "react";
import { cn } from "../utils/lib/cn";
import { courseNavItems } from "../constants/courseItems";
import useActiveCourseNav from "../hooks/useActiveCourseNav";
import { textTitle4 } from "../constants/styles";

type Props = {
  switchHandler: (id: string) => void;
};

const CourseNavbar = ({ switchHandler }: Props) => {
  const { activeCourseNavIdx, handleActiveCourseNavIdx } = useActiveCourseNav();

  useEffect(() => {
    handleActiveCourseNavIdx();
  }, []);

  const handleSwitch = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    switchHandler(id);
    handleActiveCourseNavIdx(id);
  };

  return (
    <nav className="sticky top-2 z-50 bg-main-green-100 dark:bg-main-green-900 p-4 pt-4 shadow-box-shadow-1 rounded-small overflow-x-auto">
      <ul className="flex gap-5 min-w-[42.5rem] justify-between">
        {courseNavItems.map(({ id, link, name }, idx) => {
          const isActive = activeCourseNavIdx === idx;
          return (
            <li
              key={id}
              className={cn(
                "transition-all duration-300 cursor-pointer flex-1 max-w-fit",
                textTitle4
              )}
            >
              <a
                className={cn(
                  "pb-1 transition-[color] duration-300 text-main-secondary-text/70 hover:text-main-secondary-text/90",
                  isActive &&
                  "border-b-2 border-main-primary-text text-main-primary-text hover:text-main-secondary-text"
                )}
                href={"#" + link}
                onClick={(e) => handleSwitch(e, link)}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(CourseNavbar);
