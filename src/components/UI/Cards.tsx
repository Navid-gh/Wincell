import { cn } from "../../utils/lib/cn";
import { Article, Course } from "../../types/apiTypes";
import ProductCard from "./ProductCard";
import ArticleCard from "./ArticleCard";

type Props =
  | {
      type: "course";
      array: Course[];
    }
  | {
      type: "article";
      array: Article[];
    };

const Cards = ({ array, type }: Props) => {
  // array = array.sort((a, b) => a.sortByNumber - b.sortByNumber);
  return (
    <div
      role="list"
      className={cn("flex flex-wrap gap-4", {
        "gap-4 flex-col": type === "article",
      })}
    >
      {array?.map((item) => {
        return type === "course" ? (
          <ProductCard key={item._id} data={item as Course} />
        ) : (
          <ArticleCard key={item._id} data={item as Article} />
        );
      })}
    </div>
  );
};

export default Cards;
