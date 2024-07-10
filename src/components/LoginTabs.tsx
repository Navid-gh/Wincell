import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./UI/Tabs";
import LoginBox from "./LoginBox";
import SignupBox from "./SignupBox";
import { cn } from "../utils/lib/cn";
import { mainBorder, textBody1Bold } from "../constants/styles";

const LoginTabs = () => {
  const [tab, setTab] = useState("login");

  return (
    <div
      className={
        "flex flex-col gap-4 bg-main-secondary-bg shadow-box-shadow-1 w-[50%] min-w-[28rem] rounded-big overflow-hidden " +
        mainBorder
      }
    >
      <Tabs
        defaultValue="login"
        dir="rtl"
        className=""
        onValueChange={(value) => setTab(value)}
      >
        <TabsList className={cn("w-full flex p-0 h-full", textBody1Bold)}>
          <TabsTrigger
            value="login"
            className="flex-1 py-3 border-main-secondary-text data-[state=active]:border-b data-[state=active]:border-l data-[state=active]:bg-main-green-300 rounded-bl-small"
          >
            ورود
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="flex-1 py-3 border-main-secondary-text data-[state=active]:border-b data-[state=active]:border-r data-[state=active]:bg-main-green-300 rounded-br-small"
          >
            ثبت نام
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="p-8">
        {tab === "login" ? <LoginBox /> : <SignupBox />}
      </div>
    </div>
  );
};

export default LoginTabs;
