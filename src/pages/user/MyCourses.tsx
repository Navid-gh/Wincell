import { bgTextFull, textTitle4 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import Course from "../../components/UI/icons/Course";
import { useQuery } from "@tanstack/react-query";
import { getMyCourses } from "../../api/course";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { TableCell, TableRow } from "../../components/UI/Table";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { toPersianDate } from "../../utils/toPersianDate";
import { Link } from "react-router-dom";
import { toUrl } from "../../utils/toUrl";
import TableWrapper from "../../components/UI/TableWrapper";
import WithLoaderAndError from "../../components/WithLoaderAndError";

const MyCourses = () => {
  const { token } = useAuth();
  const authHooks = useAuthHooks();
  const coursesQuery = useQuery({
    queryKey: ["my_courses"],
    queryFn: () => getMyCourses({ token, ...authHooks }),
  });

  const coursesRows = coursesQuery.data?.map((item, idx) => {
    const link = `/course/${item?._id}/${toUrl(item?.title)}`;
    return (
      <TableRow key={item._id}>
        <TableCell className="text-right">
          {toPersianNumbers(idx + 1)}
        </TableCell>
        <TableCell className="text-center">
          <Link to={link}>{item?.title}</Link>
        </TableCell>
        <TableCell className="text-center">
          {toPersianDate(item?.createdAt)}
        </TableCell>
        <TableCell className="text-center">مشاهده جزئیات</TableCell>
        <TableCell className="text-center">
          <Link to={"../certificates"}>درخواست گواهی</Link>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "bg-main-secondary-bg border border-main-primary-text",
          bgTextFull
        )}
      >
        <Course className="w-4 h-4" />
        <h1 className={textTitle4}>دوره‌های من</h1>
      </div>
      <WithLoaderAndError
        {...{
          data: coursesQuery.data,
          isLoading: coursesQuery.isLoading,
          isError: coursesQuery.isError,
          error: coursesQuery.error,
        }}
      >
        <TableWrapper
          tableRows={coursesRows!}
          title="دوره‌ها"
          caption="دوره‌های خریداری شده"
          headers={["دوره", "تاریخ ایجاد", "مشاهده جزئیات"]}
        />
      </WithLoaderAndError>
    </div>
  );
};

export default MyCourses;
