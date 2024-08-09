import { useQuery } from "@tanstack/react-query";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { getSales } from "../../api";

const Sales = () => {
  const { token } = useAuth();
  const auth = useAuthHooks();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["sales"],
    queryFn: () => getSales({ token, ...auth }),
  });
  return (
    <div className="flex flex-col gap-4">
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <ol className="flex flex-col gap-6">
          {!isLoading &&
            data?.map(({ _id }) => (
              <li key={_id} className="flex flex-col gap-3"></li>
            ))}
        </ol>
      </WithLoaderAndError>
    </div>
  );
};

export default Sales;
