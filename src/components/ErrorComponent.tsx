import { useEffect } from "react";
import toast from "react-hot-toast";

type Prop = { error: Error; resetErrorBoundary: () => void };

export default function ErrorComponent({ error }: Prop) {
  useEffect(() => {
    console.error(error);
    toast.error("خطا در برقراری ارتباط");
  });
  return <></>;
}
