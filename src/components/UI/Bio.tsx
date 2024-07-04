import { Link } from "react-router-dom";
import {
  bgTextColor,
  bottomTriangle,
  textTitle2,
  textTitle3,
  textTitle4,
  topTriangle,
} from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import Button from "./Button";
import Logo from "./icons/Logo";

const beforeClass = cn(
  topTriangle,
  "before:border-t-[34px] before:border-t-main-primary-bg before:absolute before:top-0 before:right-1/2 before:translate-x-1/2 before:border-r-[50px] before:border-l-[50px]"
);
const afterClass = cn(
  bottomTriangle,
  "after:border-b-[34px] after:border-b-main-primary-bg after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2 after:border-r-[50px] after:border-l-[50px]"
);

const Bio = () => {
  return (
    <section
      className={cn(
        "relative flex flex-col gap-2 p-12 bg-main-primary-text text-main-primary-bg rounded-big",
        beforeClass,
        afterClass
      )}
    >
      <div className="flex gap-4 items-center">
        <Logo className="max-w-[290px]" fill="rgb(var(--primary-bg-color))" />
        <div className="flex flex-col gap-2">
          <h2 className={cn(textTitle2, bgTextColor)}>وینسل</h2>
          <h3 className={textTitle3}>اولین سایت بایولوژی ایران</h3>
          <p className={cn("break-normal", textTitle4)}>
            رونویسی DNA به RNA برای زندگی ضروری است و درک نحوه عملکرد آن برای
            سلامت انسان مهم است. بیایید نگاهی دقیق تر به آنچه در حین رونویسی رخ
            می‌دهد بیندازیم. DNA یا اسید دئوکسی ریبونوکلئیک مولکولی است که
            اطلاعات ژنتیکی را کد می‌کند. با این حال، DNA نمی‌تواند مستقیماً به
            سلول دستور تولید پروتئین بدهد. به همین دلیل باید به RNA یا اسید
            ریبونوکلئیک رونویسی شود.
          </p>
          <Link to={"/about"} className="self-end">
            <Button intent="primary" size="base" className="w-full px-14">
              درباره ما
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bio;
