import WithLoaderAndError from "../../components/WithLoaderAndError";
import { bgTextFull, textTitle4 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import Comment from "../../components/UI/icons/Comment";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { getMyComments } from "../../api/comment";
import { useQuery } from "@tanstack/react-query";
import ProductComment from "../../components/UI/ProductComment";

const MyComments = () => {
  const { token } = useAuth();
  const authHooks = useAuthHooks();
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["my_comments"],
    queryFn: () => getMyComments({ token, ...authHooks }),
  });
  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "bg-main-secondary-bg border border-main-primary-text",
          bgTextFull
        )}
      >
        <Comment className="w-4 h-4" />
        <h1 className={textTitle4}>نظرات من</h1>
      </div>
      <WithLoaderAndError {...{ isLoading, error, data, isError }}>
        <ul className="flex flex-col gap-4">
          {data?.map((comment) => (
            <ProductComment
              key={comment._id}
              comment={comment.comment}
              date={comment.createdAt}
              name={comment.user.first_name}
              status={comment.status}
              product={comment.product}
            />
          ))}
        </ul>
      </WithLoaderAndError>
    </div>
  );
};

export default MyComments;
