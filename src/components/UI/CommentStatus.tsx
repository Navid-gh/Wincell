import { textBody3Bold } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import Check from "./icons/Check";
import Cross from "./icons/Cross";
import Pending from "./icons/Pending";

type Props = {
  status: string;
};

function toEngStatus(status: string) {
  const obj = {
    msg: "",
    bgColor: "bg-main-green-300",
    Icon: Cross,
  };
  switch (status) {
    case "pending":
      obj.msg = "در انتظار تایید";
      obj.bgColor = "bg-main-yellow";
      obj.Icon = Pending;
      break;
    case "approved":
      obj.msg = "تایید شده";
      obj.bgColor = "bg-main-green-300";
      obj.Icon = Check;
      break;
    case "rejected":
      obj.msg = "رد شده";
      obj.bgColor = "bg-main-red";
      obj.Icon = Cross;
      break;
    default:
      obj.msg = "در انتظار تایید";
      obj.bgColor = "bg-main-yellow";
      obj.Icon = Pending;
  }
  return obj;
}

const CommentStatus = ({ status }: Props) => {
  const { bgColor, msg, Icon } = toEngStatus(status);
  return (
    <span
      className={cn(
        "text-main-black flex items-center gap-1 px-1 rounded-full",
        bgColor,
        textBody3Bold
      )}
    >
      <span>{<Icon className="w-3 h-3" />}</span>
      <span>{msg}</span>
    </span>
  );
};

export default CommentStatus;
