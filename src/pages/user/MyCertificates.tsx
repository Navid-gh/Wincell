import UserBoard from "../../components/UI/icons/UserBoard";
import {
  bgTextFull,
  textBody2,
  textBody3,
  textTitle4,
} from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import Button from "../../components/UI/Button";
import { useRef, useState } from "react";
import Dialog from "../../components/UI/Dialog";
import { useQuery } from "@tanstack/react-query";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { getMyCertificates } from "../../api/course";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import TableWrapper from "../../components/UI/TableWrapper";
import { TableCell, TableRow } from "../../components/UI/Table";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { toUrl } from "../../utils/toUrl";
import { toPersianDate } from "../../utils/toPersianDate";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/UI/Select";
import Course from "../../components/UI/icons/Course";
import inputValidator from "../../utils/inputValidator";
import toast from "react-hot-toast";

const MyCertificates = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [show, setShow] = useState(false);
  const checkRef = useRef<HTMLInputElement>(null);
  const { token, data: userData } = useAuth();
  const authHooks = useAuthHooks();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["my_certificates"],
    queryFn: () => getMyCertificates({ token, ...authHooks }),
  });

  const handleConfirm = () => {
    if (checkRef.current && !checkRef.current.checked) {
      toast.error("لطفا تایید کنید که این دوره را مطالعه کرده اید");
      return;
    }
    const courseMsg = inputValidator(selectedCourse);
    if (courseMsg) {
      toast.error("لطفا دوره مورد نظر خود را انتخاب کنید");
      return;
    }
    const loader = toast.loading("در حال ارسال اطلاعات");
    try {
    } catch (error) {
      toast.error("خطا در ارسال اطلاعات");
      console.log(error);
    } finally {
      toast.dismiss(loader);
      setShow(false);
    }
  };

  const certificateRows = data?.map((item, idx) => {
    const link = `/course/${item?.course._id}/${toUrl(item?.course.title)}`;
    return (
      <TableRow key={item._id}>
        <TableCell className="text-right">
          {toPersianNumbers(idx + 1)}
        </TableCell>
        <TableCell className="text-center">{item?.title}</TableCell>
        <TableCell className="text-center">
          <Link to={link}>{item?.course.title}</Link>
        </TableCell>
        <TableCell className="text-center">{item?.description}</TableCell>
        <TableCell className="text-center">
          {toPersianDate(item?.createdAt)}
        </TableCell>
        <TableCell className="text-center underline cursor-pointer">
          <Button intent="primary" size={"base"}>
            <a
              href={item?.downloadUrl}
              download={item?.title}
              className="whitespace-nowrap"
            >
              دانلود PDF
            </a>
          </Button>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <div className="flex flex-col gap-4">
      <Dialog {...{ show, setShow }}>
        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "bg-main-primary-bg border border-main-primary-text",
              bgTextFull
            )}
          >
            <Course className="w-4 h-4" />
            <h2 className={textTitle4}>درخواست گواهی</h2>
          </div>
          <div className="flex flex-col gap-2">
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger className="max-w-[20rem]">
                <SelectValue placeholder="دوره مورد نظر خود را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent
                className="z-[10000] bg-main-secondary-bg"
                dir="rtl"
              >
                <SelectGroup>
                  {userData.courses.map(({ title, _id }) => (
                    <SelectItem
                      key={_id}
                      className="cursor-pointer hover:-translate-x-2 transition-transform duration-300"
                      value={title}
                    >
                      {title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="agree" id="agree" ref={checkRef} />
            <span className={textBody3}>
              میپذیرم که من تمام قسمت های این دوره را مطالعه کردم و به درک درستی
              از مطالب رسیده ام.
            </span>
          </div>
          <p className={textBody2}>
            گواهی شما بعد از تایید توسط تیم ما در پنل شما آپلود خواهد شد.
          </p>
          <Button
            intent="secondary"
            size={"fit"}
            className="self-center"
            onClick={handleConfirm}
          >
            ثبت درخواست
          </Button>
        </div>
      </Dialog>
      <div
        className={cn(
          "bg-main-secondary-bg border border-main-primary-text",
          bgTextFull
        )}
      >
        <UserBoard className="w-4 h-4" />
        <h1 className={textTitle4}>گواهی‌های من</h1>
      </div>
      <Button intent="primary" size={"fit"} onClick={() => setShow(true)}>
        درخواست گواهی
      </Button>
      <WithLoaderAndError {...{ data, isError, isLoading, error }}>
        <TableWrapper
          tableRows={certificateRows!}
          caption=""
          headers={["عنوان", "دوره", "توضیحات", "تاریخ ثبت"]}
        />
      </WithLoaderAndError>
    </div>
  );
};

export default MyCertificates;
