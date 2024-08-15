import { useParams, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import {
  deleteComment,
  getAllComments,
  setCommentStatus,
} from "../../api/comment";
import { Comment } from "../../types/apiTypes";
import { toPersianDate } from "../../utils/toPersianDate";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { statusMapper } from "../../utils/commentStatus";

type State = {
  id: string;
  comments: Comment[];
};

// const mapper = {
//   Courses: "course",
//   Articles: "blog",
// } as const;

const ManageComments = () => {
  const { parent } = useParams<{ parent: "courses" | "articles" | "all" }>();
  const state: State = useLocation().state;
  const { token } = useAuth();
  const auth = useAuthHooks();
  if (parent === "all") {
    const allFaqsQuery = useQuery({
      queryKey: ["comments"],
      queryFn: () => getAllComments({ token, ...auth }),
    });
    useEffect(() => {
      if (allFaqsQuery.data) setComments(allFaqsQuery.data);
    }, [allFaqsQuery.data]);
  }
  const [comments, setComments] = useState(state?.comments ?? []);
  const handleCommentStatus = async (commentId: string, status: boolean) => {
    try {
      status
        ? await setCommentStatus({ token, ...auth }, commentId)
        : await deleteComment({ token, ...auth }, commentId);
      toast.success("موفقیت آمیز");
    } catch (error) {
      console.log(error);
      toast.error("خطا در برقراری ارتباط");
    }
  };
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {comments?.map(
          ({ _id, text, updatedAt, userID, status, courseID, blogID }) => {
            return (
              <li key={_id} className="flex flex-col gap-2">
                <span>تاریخ : {toPersianDate(updatedAt)}</span>
                <span>برای دوره/مقاله {courseID?.title || blogID?.title}</span>
                <span>{userID.first_name}</span>
                <span>{userID.last_name}</span>
                <span>{text}</span>
                <span>{statusMapper[status]}</span>
                <div className="flex gap-3">
                  {parent === "all" && (
                    <button
                      className="max-w-fit bg-pink"
                      onClick={() => handleCommentStatus(_id, true)}
                    >
                      تایید
                    </button>
                  )}
                  <button
                    className="max-w-fit bg-red-500"
                    onClick={() => handleCommentStatus(_id, false)}
                  >
                    رد نظر
                  </button>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default ManageComments;
