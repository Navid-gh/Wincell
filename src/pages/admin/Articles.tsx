import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { deleteArticle, getArticles } from "../../api/article";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { toUrl } from "../../utils/toUrl";

const Articles = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles(undefined, undefined, undefined),
  });

  const { token } = useAuth();
  const auth = useAuthHooks();
  const queryClient = useQueryClient();

  const deleteArticleMutation = useMutation({
    mutationFn: (id: string) => deleteArticle({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      <div className="flex flex-col gap-12">
        <Link to={"Add"} className="border-b border-purple max-w-fit">
          اضافه کردن مقاله جدید
        </Link>
        <ul className="flex flex-col gap-6">
          {data?.map((item) => {
            const url = `/Article/${item?._id}/${toUrl(item?.title)}`;
            return (
              <li
                key={item._id}
                className="flex flex-col border-b-2 border-black"
              >
                <Link to={url} className="text-blue max-w-fit">
                  صفحه ی مقاله
                </Link>
                <span>{item.title}</span>
                <span>{item.short_text}</span>
                <span>آیدی : {item._id}</span>
                <button
                  className="text-red-500 cursor-pointer max-w-fit"
                  disabled={deleteArticleMutation.isPending}
                  onClick={() => {
                    deleteArticleMutation.mutate(item._id);
                  }}
                >
                  حذف مقاله
                </button>
                <Link
                  to={`Edit`}
                  className="text-yellow max-w-fit"
                  state={item}
                >
                  <span>تغییر مقاله</span>
                </Link>
                <Link
                  to={"comments"}
                  className="text-yellow max-w-fit"
                  state={{ id: item._id, comments: item.comments }}
                >
                  <span>مدیریت کامنت ها</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </WithLoaderAndError>
  );
};

export default Articles;
