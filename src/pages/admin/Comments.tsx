import { useParams, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { setCommentStatus } from "../../api/comment";
import { Comment } from "../../types/apiTypes";
import { toPersianDate } from "../../utils/toPersianDate";

type State = {
  id: string;
  comments: Comment[];
};

// const mapper = {
//   Courses: "course",
//   Articles: "blog",
// } as const;

const ManageComments = () => {
  // const { parent } = useParams<{ parent: "Courses" | "Articles" }>();
  const { token } = useAuth();
  const auth = useAuthHooks();
  const { comments }: State = useLocation().state;
  const handleCommentStatus = async (commentId: string, status: boolean) => {
    try {
      await setCommentStatus({ token, ...auth }, commentId, status);
      toast.success("موفقیت آمیز");
    } catch (error) {
      console.log(error);
      toast.error("خطا در برقراری ارتباط");
    }
  };
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {comments?.map(({ _id, comment, isShowAdmin, updatedAt }) => {
          if (isShowAdmin) return;
          return (
            <li key={_id} className="flex flex-col gap-2">
              <span>تاریخ : {toPersianDate(updatedAt)}</span>
              <span>{comment}</span>
              <div className="flex gap-3">
                <button
                  className="max-w-fit bg-pink"
                  onClick={() => handleCommentStatus(_id, true)}
                >
                  تایید
                </button>
                <button
                  className="max-w-fit bg-red-500"
                  onClick={() => handleCommentStatus(_id, false)}
                >
                  رد نظر
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ManageComments;
