import { memo, useRef, useState } from "react";
import { bgProductPage, bgTextFull, textTitle4 } from "../constants/styles";
import { cn } from "../utils/lib/cn";
import Comment from "./UI/icons/Comment";
import Textarea from "./UI/Textarea";
import Button from "./UI/Button";
import { useAuth, useAuthHooks } from "../hooks/useAuth";
import inputValidator from "../utils/inputValidator";
import toast from "react-hot-toast";
import Loader from "./UI/Loader";
import { addComment } from "../api/comment";

type Props = {
  type: "course" | "blog";
  postId: string;
};

const WriteComment = ({ type, postId }: Props) => {
  const [pending, setPending] = useState(false);
  const { token } = useAuth();
  const authHooks = useAuthHooks();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = async () => {
    const msgText = inputValidator(textRef.current?.value);
    if (msgText) return toast.error(msgText);
    setPending(true);
    try {
      await addComment(
        { token, ...authHooks },
        {
          text: textRef.current!.value,
          method: type,
          ID: postId,
          snedType: "comment",
        }
      );
      toast.success("نظر شما با موفقیت ارسال شد");
    } catch (error) {
      console.log(error);
      toast.error("ارسال نظر با خطا مواجه شد");
    } finally {
      setPending(false);
    }
  };
  return (
    <div className={cn("flex flex-col gap-2", bgProductPage)}>
      <div className={cn("bg-main-green-300", bgTextFull)}>
        <Comment className="w-4 h-4" />
        <h3 className={textTitle4}>نظر شما چیه؟</h3>
      </div>
      <Textarea
        intent="primary"
        inputSize="base"
        ref={textRef}
        placeholder="اینجا بنویسید..."
      />
      <Button
        intent="primary"
        size="fit"
        className="self-end"
        disabled={pending}
        onClick={handleSubmit}
      >
        {pending ? <Loader type="button" /> : "ارسال نظر"}
      </Button>
    </div>
  );
};

export default memo(WriteComment);
