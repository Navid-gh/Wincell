import { memo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./UI/Tabs";
import Cards from "./UI/Cards";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../api/course";
import WithLoaderAndError from "./WithLoaderAndError";
import { cn } from "../utils/lib/cn";
import { bgTextColor, textBody2, textTitle2 } from "../constants/styles";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import { getCategories } from "../api/category";

type Props = {
  title: string;
};

const CardsWithTabs = ({ title }: Props) => {
  const [tab, setTab] = useState("");
  const categoriesQuery = useQuery({
    queryKey: ["course_categories"],
    queryFn: () => getCategories(""),
  });
  const courseQuery = useQuery({
    queryKey: ["courses_" + tab],
    queryFn: () => getCourses(tab, 5, undefined),
  });
  const isLoading = courseQuery.isLoading || categoriesQuery.isLoading;
  const isError = courseQuery.isError || categoriesQuery.isError;
  const error = courseQuery.error || categoriesQuery.error;
  return (
    <div className="flex flex-col gap-4">
      <h2 className={cn("", textTitle2, bgTextColor)}>{title}</h2>
      <div className="flex flex-col gap-4">
        <WithLoaderAndError
          {...{ data: courseQuery.data, isLoading, isError, error }}
        >
          <Tabs
            value={tab}
            dir="rtl"
            className={cn("self-start max-w-full overflow-x-auto", textBody2)}
            onValueChange={(value) => setTab(value)}
          >
            <TabsList>
              <TabsTrigger
                className="border-b border-main-secondary-text/70 data-[state=active]:border-b-2 data-[state=active]:border-main-primary-text"
                value=""
              >
                همه
              </TabsTrigger>
              {categoriesQuery.data &&
                categoriesQuery.data.map((category) => (
                  <TabsTrigger
                    className="border-b border-main-secondary-text/70 data-[state=active]:border-b-2 data-[state=active]:border-main-primary-text"
                    value={category._id}
                    key={category._id}
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
            </TabsList>
          </Tabs>
          {courseQuery.data && <Cards type="course" array={courseQuery.data} />}
          <Link to={"/courses"} className="self-center">
            <Button
              intent="secondary"
              size="base"
              role="link"
              className="w-full"
            >
              مشاهده همه
            </Button>
          </Link>
        </WithLoaderAndError>
      </div>
    </div>
  );
};

export default memo(CardsWithTabs);
