import WithLoaderAndError from "../../components/WithLoaderAndError";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";

const Users = () => {
  const { token } = useAuth();
  const auth = useAuthHooks();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers({ token, ...auth }),
  });
  return (
    <div className="flex flex-col gap-4">
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <ol className="flex flex-col gap-6">
          {!isLoading &&
            data?.map(({ _id, first_name, last_name }, idx) => (
              <li key={_id} className="flex flex-col gap-3">
                <span>شماره: {idx + 1}</span>
                <span>شناسه: {_id}</span>
                <span>اسم: {first_name}</span>
                <span>نام خانوادگی: {last_name}</span>
              </li>
            ))}
        </ol>
      </WithLoaderAndError>
    </div>
  );
};

export default Users;
