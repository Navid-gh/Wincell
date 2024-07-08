import { useState } from "react";
import { courseNavItems } from "../constants/courseItems";

export default function useActiveCourseNav() {
  const [activeCourseNavIdx, setActiveCourseNavIdx] = useState(0);
  const handleActiveCourseNavIdx = (id?: string) => {
    if (id)
      return setActiveCourseNavIdx(
        courseNavItems.findIndex((item) => item.link === id)
      );
    const hash = window.location.hash;
    if (hash) {
      const hashVal = hash.split("#")[1];
      let activeIndex = courseNavItems.findIndex(
        (item) => item.link === hashVal
      );
      activeIndex = activeIndex === -1 ? 0 : activeIndex;
      setActiveCourseNavIdx(activeIndex);
    }
  };
  return { activeCourseNavIdx, handleActiveCourseNavIdx };
}
