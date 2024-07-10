import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./UI/Tabs";
import Cards from "./UI/Cards";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../api/course";
import WithLoaderAndError from "./WithLoaderAndError";
import { cn } from "../utils/lib/cn";
import { bgTextColor, textBody2, textTitle2 } from "../constants/styles";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

type Props = {
  title: string;
  apiUrl: string;
};

const CardsWithTabs = ({ title }: Props) => {
  const [tab, setTab] = useState("all");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses", tab],
    queryFn: getCourses,
  });
  return (
    <div className="flex flex-col gap-4">
      <h2 className={cn("", textTitle2, bgTextColor)}>{title}</h2>
      <div className="flex flex-col gap-4">
        <Tabs
          defaultValue="all"
          dir="rtl"
          className={cn("self-start max-w-full overflow-x-auto", textBody2)}
          onValueChange={(value) => setTab(value)}
        >
          <TabsList>
            <TabsTrigger
              className="border-b border-main-secondary-text/70 data-[state=active]:border-b-2 data-[state=active]:border-main-primary-text"
              value="all"
            >
              همه
            </TabsTrigger>
            <TabsTrigger
              className="border-b border-main-secondary-text/70 data-[state=active]:border-b-2 data-[state=active]:border-main-primary-text"
              value="biology"
            >
              زیست شناسی
            </TabsTrigger>
            <TabsTrigger
              className="border-b border-main-secondary-text/70 data-[state=active]:border-b-2 data-[state=active]:border-main-primary-text"
              value="virus"
            >
              ویروس شناسی
            </TabsTrigger>
            <TabsTrigger
              className="border-b border-main-secondary-text/70 data-[state=active]:border-b-2 data-[state=active]:border-main-primary-text"
              value="microbiology"
            >
              میکروبیولوژی
            </TabsTrigger>
            <TabsTrigger
              className="border-b border-main-secondary-text/70 data-[state=active]:border-b-2 data-[state=active]:border-main-primary-text"
              value="Genetics"
            >
              ژنتیک
            </TabsTrigger>
            <TabsTrigger
              className="border-b border-main-secondary-text/70 data-[state=active]:border-b-2 data-[state=active]:border-main-primary-text"
              value="biotechnology"
            >
              بیوتکنولوژی
            </TabsTrigger>
            <TabsTrigger
              className="border-b border-main-secondary-text/70 data-[state=active]:border-b-2 data-[state=active]:border-main-primary-text"
              value="Botanical"
            >
              گیاه شناسی
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <WithLoaderAndError {...{ data, isLoading, isError, error }}>
          {data && <Cards type="course" array={data} />}
        </WithLoaderAndError>
        <Link to={"/courses"} className="self-center">
          <Button intent="secondary" size="base" role="link" className="w-full">
            مشاهده همه
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardsWithTabs;
