import DropDown from "../../components/UI/DropDown";
import { textTitle1, bgTextColor, textBody1Bold } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../api/article";
import { articlesSorts } from "../../constants/filterItems";
import { useState } from "react";
import { getCategories } from "../../api/category";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import Cards from "../../components/UI/Cards";

const CoursesPage = () => {

  const [categoryId, setCategoryId] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<string | undefined>(undefined);

  const categoriesQuery = useQuery({
    queryKey: ["articles_categories"],
    queryFn: () => getCategories("blog"),
  });

  const articleQuery = useQuery({
    queryKey: ["courses", categoryId, sort],
    queryFn: () => getArticles(categoryId, undefined, sort),
  });

  const data = articleQuery.data;
  const isLoading = articleQuery.isLoading || categoriesQuery.isLoading;
  const isError = articleQuery.isError || categoriesQuery.isError;
  const error = articleQuery.error || categoriesQuery.error;

  return (
    <main className="flex flex-col gap-10 px-12 py-6">
      <section className="flex flex-col gap-4">
        <h1 className={cn(textTitle1, bgTextColor)}>دوره های وینسل</h1>
        <p className={cn(textBody1Bold)}>
          وینسل یک سایت آموزشی است که به طور خاص بر روی آموزش زیست‌شناسی تمرکز
          دارد. این سایت منابع متنوعی از جمله مقالات، ویدیوهای آموزشی، آزمون‌های
          آنلاین و دوره‌های تخصصی را ارائه می‌دهد تا به دانش‌آموزان و دانشجویان
          کمک کند تا مفاهیم زیست‌شناسی را بهتر درک کنند و در امتحانات خود موفق
          شوند. وینسل با استفاده از روش‌های نوین آموزشی و بهره‌گیری از اساتید
          مجرب، محیطی مناسب برای یادگیری فراهم می‌کند.
        </p>
      </section>
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <section className="flex gap-4 flex-wrap">
          <DropDown
            title="دسته‌بندی"
            keyToBePassed="_id"
            items={categoriesQuery.data!}
            type="primary"
            state={categoryId}
            setState={setCategoryId}
          />
          <DropDown
            title="مرتب‌سازی"
            keyToBePassed="key"
            items={articlesSorts}
            type="secondary"
            state={sort}
            setState={setSort}
          />
        </section>
        <section className="flex gap-10 flex-wrap">
          <Cards array={data!} type="article" />
        </section>
      </WithLoaderAndError>
    </main>
  );
};

export default CoursesPage;