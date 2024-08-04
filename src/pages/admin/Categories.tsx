import { ChangeEvent, useEffect, useRef, useState } from "react";
import { bgTextColor, textTitle2 } from "../../constants/styles";
import Button from "../../components/UI/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategories,
} from "../../api/category";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Category } from "../../types/apiTypes";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const queryClient = useQueryClient();
  const { token } = useAuth();
  const auth = useAuthHooks();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(undefined),
  });

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);
  const addCategoryMutation = useMutation({
    mutationFn: () =>
      addCategory(
        { token, ...auth },
        nameRef.current!.value,
        typeRef.current!.value as "course" | "blog"
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  const editCategoryMutation = useMutation({
    mutationFn: (idx: number) =>
      editCategory(
        { token, ...auth },
        categories[idx]._id,
        categories[idx].title,
        categories[idx].type
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("موفقیت آمیز");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const removeCategoryMutation = useMutation({
    mutationFn: (idx: number) =>
      deleteCategory({ token, ...auth }, categories[idx]._id),
    onSuccess: (_: any, variables: number) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("موفقیت آمیز");
      setCategories((prev) => [...prev.splice(variables, 1)]);
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
  const handleDataChange = <T extends HTMLInputElement | HTMLSelectElement>(
    event: ChangeEvent<T>,
    id: string,
    key: keyof Category
  ) => {
    const updatedCategories = categories.map((category) => {
      if (category._id === id) {
        return { ...category, [key]: event.target.value };
      }
      return category;
    });
    setCategories(updatedCategories);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className={textTitle2 + " " + bgTextColor}>دسته بندی</h1>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span>نام</span>
          <input type="text" ref={nameRef} />
        </div>
        <div className="flex flex-col">
          <span>نوع</span>
          <select name="" id="" ref={typeRef} defaultValue="course">
            <option value="course">دوره</option>
            <option value="blog">مقاله</option>
          </select>
        </div>
        <Button
          intent={"primary"}
          size={"fit"}
          className="max-w-fit"
          onClick={() => addCategoryMutation.mutate()}
        >
          اضافه
        </Button>
      </div>
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        <ul className="flex flex-col gap-6">
          {categories?.map(({ _id, title, type }, idx) => (
            <li
              key={_id}
              className="flex flex-col gap-2 border-b border-main-primary-text p-4"
            >
              <div className="flex gap-2">
                <span>آیدی</span>
                <span>{_id}</span>
              </div>
              <div className="flex gap-2">
                <span>اسم</span>
                <input
                  type="text"
                  value={title}
                  onChange={(event) => handleDataChange(event, _id, "title")}
                />
              </div>
              <div className="flex gap-2">
                <span>نوع</span>
                <select
                  value={type}
                  onChange={(event) => handleDataChange(event, _id, "type")}
                >
                  <option value="course">دوره</option>
                  <option value="blog">مقاله</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button
                  intent={"primary"}
                  size={"fit"}
                  className="max-w-fit"
                  onClick={() => editCategoryMutation.mutate(idx)}
                >
                  ویرایش
                </Button>
                <Button
                  intent={"secondary"}
                  size={"fit"}
                  className="max-w-fit"
                  onClick={() => removeCategoryMutation.mutate(idx)}
                >
                  حذف
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </WithLoaderAndError>
    </div>
  );
};

export default Categories;
