import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import Button from "../../components/UI/Button";
import { addCode, deleteCode, getAllCodes } from "../../api";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import WithLoaderAndError from "../../components/WithLoaderAndError";

const Codes = () => {
  const codeRef = useRef<HTMLInputElement>(null);
  const discountRef = useRef<HTMLInputElement>(null);
  const { token } = useAuth();
  const auth = useAuthHooks();
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["codes"],
    queryFn: () => getAllCodes({ token, ...auth }),
  });
  const addCodeMutation = useMutation({
    mutationFn: () =>
      addCode(
        { token, ...auth },
        codeRef.current!.value,
        discountRef.current!.value
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["codes"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const removeCodeMutation = useMutation({
    mutationFn: (id: string) => deleteCode({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["codes"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <h1>کد ها</h1>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="کد" ref={codeRef} />
        <input type="text" placeholder="عدد تخفیف" ref={discountRef} />
        <Button
          intent={"primary"}
          size={"fit"}
          className="max-w-fit"
          onClick={() => addCodeMutation.mutate()}
        >
          اضافه
        </Button>
      </div>
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <ul className="flex flex-col gap-6">
          {!isLoading &&
            data?.map(({ _id, code, discount }) => (
              <li key={_id} className="flex flex-col gap-3">
                <span>کد: {code}</span>
                <span>تخفیف: {discount}</span>
                <div className="flex gap-4">
                  <button
                    className="max-w-fit bg-pink"
                    onClick={() => removeCodeMutation.mutate(_id)}
                  >
                    حذف
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </WithLoaderAndError>
    </div>
  );
};

export default Codes;
