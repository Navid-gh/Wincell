import { useState } from "react";
import IconWrapper from "./UI/IconWrapper";
import Share from "./UI/icons/Share";
import Heart from "./UI/icons/Heart";
import { cn } from "../utils/lib/cn";
import Telegram from "./UI/icons/Telegram";
import Twitter from "./UI/icons/Twitter";
import Copy from "./UI/icons/Copy";
import { toUrl } from "../utils/toUrl";
import toast from "react-hot-toast";
import FilledHeart from "./UI/icons/FilledHeart";
import { likeCourse } from "../api/course";
import { likeArticle } from "../api/article";
import { useAuth, useAuthHooks } from "../hooks/useAuth";

type Props = {
  className?: string;
  postId: string;
  postTitle: string;
  type: "course" | "article";
};

const ShareBox = ({ className, postId, postTitle, type }: Props) => {
  const [showBox, setShowBox] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { token } = useAuth();
  const authHooks = useAuthHooks();
  const url =
    "wincells.com/" +
    (type == "course" ? "course" : "article") +
    "/" +
    postId +
    "/" +
    toUrl(postTitle);
  const telText =
    type === "course"
      ? `به همگی پیشنهاد میکنم این دوره را در سایت وینسل درباره ${postTitle} حتما ببینید.`
      : `به همگی پیشنهاد میکنم این مقاله جذاب را در سایت وینسل درباره ${postTitle} حتما بخونید.`;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url);
    toast.success("لینک با موفقیت کپی شد");
  };

  const handleLike = async () => {
    if (isLiked) return;
    if (!token) return toast.error("لطفا ابتدا وارد اکانت خود شوید");
    setIsLiked(true);
    try {
      type == "course"
        ? await likeCourse({ token, ...authHooks }, postId)
        : await likeArticle({ token, ...authHooks }, postId);
    } catch (error) {
      setIsLiked(false);
      console.log(error);
      toast.error("خطا در برقراری ارتباط");
    }
  };
  return (
    <div className={cn("flex gap-2", className)}>
      <div
        hidden={!showBox}
        className={cn(
          "flex gap-1 transition-all duration-300 opacity-0 pointer-events-none translate-x-4",
          showBox && "opacity-100 pointer-events-auto translate-x-0"
        )}
        role="list"
      >
        <a
          href={`https://t.me/share/url?url=${url}&text=${telText}`}
          target="_blank"
          rel="noreferrer noopenner"
          role="listitem"
        >
          <IconWrapper>
            <Telegram className="w-5 h-5 invert dark:invert-0" />
          </IconWrapper>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${postTitle}&url=${url}`}
          target="_blank"
          rel="noreferrer noopenner"
          role="listitem"
        >
          <IconWrapper>
            <Twitter className="w-5 h-5 invert dark:invert-0" />
          </IconWrapper>
        </a>
        <IconWrapper onClick={handleCopyUrl} role="listitem">
          <Copy className="w-5 h-5 dark:invert" />
        </IconWrapper>
      </div>
      <IconWrapper onClick={() => setShowBox((prev) => !prev)}>
        <Share className="w-5 h-5 dark:invert" />
      </IconWrapper>
      <IconWrapper onClick={handleLike}>
        {isLiked ? (
          <FilledHeart className="w-5 h-5 dark:invert" />
        ) : (
          <Heart className="w-5 h-5 dark:invert" />
        )}
      </IconWrapper>
    </div>
  );
};

export default ShareBox;
