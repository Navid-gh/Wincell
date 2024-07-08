import { useRef } from "react";
import { bgProductPage, textTitle4 } from "../constants/styles";
import { cn } from "../utils/lib/cn";
import Comment from "./UI/icons/Comment";
import Textarea from "./UI/Textarea";
import Button from "./UI/Button";

const WriteComment = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div className={cn("flex flex-col gap-2", bgProductPage)}>
      <div className="p-2 bg-main-green-300 flex gap-2 items-center rounded-small">
        <Comment className="w-4 h-4" />
        <h3 className={textTitle4}>نظر شما چیه؟</h3>
      </div>
      <Textarea
        intent="primary"
        inputSize="base"
        ref={textRef}
        placeholder="اینجا بنویسید..."
      />
      <Button intent="primary" size="fit" className="self-end">
        ثبت نظر
      </Button>
    </div>
  );
};

export default WriteComment;
