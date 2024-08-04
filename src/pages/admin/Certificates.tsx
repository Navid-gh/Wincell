import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { getAllCertificates } from "../../api/course";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { toPersianDate } from "../../utils/toPersianDate";
import Button from "../../components/UI/Button";
import toast from "react-hot-toast";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";

const Certificates = () => {
  const [pdfs, setPdfs] = useState<string[]>([]);
  const queryClient = new QueryClient();
  const { token } = useAuth();
  const auth = useAuthHooks();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["certificates"],
    queryFn: getAllCertificates,
  });
  const SubmitCategoryMutation = useMutation({
    mutationFn: () =>
      new Promise((resolve) => {
        resolve({});
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["certificates"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const handleDataChange = <T extends HTMLInputElement | HTMLSelectElement>(
    event: ChangeEvent<T>,
    id: number
  ) => {
    const temp = [...pdfs];
    temp[id] = event.target.value;
    setPdfs(temp);
  };
  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      {data && (
        <ul>
          {data?.map((item, idx) => (
            <li className="flex flex-col gap-4" key={item._id}>
              <div>عنوان : {item.title}</div>
              <div>توضیحات : {item.description}</div>
              <div>دوره : {item.course.title}</div>
              <div>تاریخ درخواست : {toPersianDate(item.createdAt)}</div>
              <div className="flex gap-2">
                <span>لینک pdf</span>
                <input
                  type="text"
                  value={pdfs[idx]}
                  onChange={(e) => handleDataChange(e, idx)}
                />
              </div>
              <Button intent={"primary"} size={"fit"}>
                تایید
              </Button>
            </li>
          ))}
        </ul>
      )}
    </WithLoaderAndError>
  );
};

export default Certificates;
