import { ReactNode } from "react";
import ErrorComponent from "./ErrorComponent";
import Loader from "./UI/Loader";

type Props<T> = {
  isError: boolean;
  isLoading: boolean;
  data: T;
  error: Error | null;
  children: ReactNode;
};

const WithLoaderAndError = <T,>({
  isError,
  isLoading,
  data,
  error,
  children,
}: Props<T>) => {
  if (isError) {
    return <ErrorComponent error={error!} resetErrorBoundary={() => {}} />;
  }

  if (isLoading) return <Loader type="main" />;

  if (!data) {
    return <div>اطلاعاتی یافت نشد</div>;
  }
  return <>{children}</>;
};

export default WithLoaderAndError;
