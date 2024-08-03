import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { deleteTicket, getAllTickets } from "../../api";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { toPersianDate } from "../../utils/toPersianDate";
import Button from "../../components/UI/Button";

const Tickets = () => {
  const { token } = useAuth();
  const auth = useAuthHooks();
  const queryClient = new QueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tickets"],
    queryFn: () => getAllTickets({ token, ...auth }),
  });

  const handleTicketMutation = useMutation({
    mutationFn: (id: string) => deleteTicket({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      {data && (
        <ul className="flex flex-col gap-4">
          {data?.map(({ _id, desc, phone, title, createdAt }) => (
            <li className="flex flex-col gap-4" key={_id}>
              <div>شماره تماس : {phone}</div>
              <div>عنوان : {title}</div>
              <div>پیام : {desc}</div>
              <div>تاریخ درخواست : {createdAt && toPersianDate(createdAt)}</div>
              <Button
                intent={"primary"}
                size={"fit"}
                onClick={() => handleTicketMutation.mutate(_id)}
              >
                دیده شد
              </Button>
            </li>
          ))}
        </ul>
      )}
    </WithLoaderAndError>
  );
};

export default Tickets;
