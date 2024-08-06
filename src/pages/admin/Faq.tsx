import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Faq as FaqType } from "../../types/apiTypes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { addFAQ, deleteFAQ, editFAQ, getFAQ } from "../../api";
import toast from "react-hot-toast";

type State = {
  id: string;
  faqs: FaqType[];
};
const Faq = () => {
  const { parent } = useParams<{ parent: "course" | "all" }>();
  const locationState: State = useLocation()?.state;
  const reqRef = useRef<HTMLInputElement>(null);
  const answerRef = useRef<HTMLInputElement>(null);
  const { token } = useAuth();
  const auth = useAuthHooks();
  const queryClient = useQueryClient();
  if (parent === "all") {
    const allFaqsQuery = useQuery({
      queryKey: ["faqs"],
      queryFn: () => getFAQ(),
    });
    useEffect(() => {
      if (allFaqsQuery.data) setFaqsState(allFaqsQuery.data);
    }, [allFaqsQuery.data]);
  }
  const [faqsState, setFaqsState] = useState(locationState?.faqs ?? []);

  const addFaqMutation = useMutation({
    mutationFn: () =>
      addFAQ(
        { token, ...auth },
        {
          answer: answerRef.current!.value,
          question: reqRef.current!.value,
          type: parent!,
        }
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const editFaqMutation = useMutation({
    mutationFn: (idx: number) =>
      editFAQ({ token, ...auth }, faqsState[idx]._id, {
        answer: faqsState[idx].answer,
        question: faqsState[idx].question,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const removeFaqMutation = useMutation({
    mutationFn: (idx: number) =>
      deleteFAQ({ token, ...auth }, faqsState[idx]._id),
    onSuccess: (_: any, variables: number) => {
      queryClient.invalidateQueries({ queryKey: ["courses", "admin"] });
      toast.success("موفقیت آمیز");
      setFaqsState((prev) => [...prev.splice(variables, 1)]);
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const handleDataChange = <T extends HTMLInputElement | HTMLSelectElement>(
    event: ChangeEvent<T>,
    id: string,
    key: keyof FaqType
  ) => {
    const updatedCategories = faqsState.map((faq) => {
      if (faq._id === id) {
        return { ...faq, [key]: event.target.value };
      }
      return faq;
    });
    setFaqsState(updatedCategories);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1>FAQ</h1>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="سوال" ref={reqRef} />
        <input type="text" placeholder="جواب" ref={answerRef} />
        <button
          className="max-w-fit bg-pink"
          onClick={() => addFaqMutation.mutate()}
        >
          اضافه
        </button>
      </div>
      <ul className="flex flex-col gap-6">
        {faqsState?.map(({ _id, answer, question }, idx) => (
          <li key={_id} className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span>سوال</span>
              <input
                type="text"
                value={question}
                onChange={(event) => handleDataChange(event, _id, "question")}
              />
            </div>
            <div className="flex flex-col">
              <span>جواب</span>
              <input
                type="text"
                value={answer}
                onChange={(event) => handleDataChange(event, _id, "answer")}
              />
            </div>
            <div className="flex gap-4">
              <button
                className="max-w-fit bg-pink"
                onClick={() => editFaqMutation.mutate(idx)}
              >
                تغییر
              </button>
              <button
                className="max-w-fit bg-pink"
                onClick={() => removeFaqMutation.mutate(idx)}
              >
                حذف
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
