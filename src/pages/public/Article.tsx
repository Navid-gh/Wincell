import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api/article";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import ImageSlide from "../../components/UI/ImageSlide";
import CategoryText from "../../components/UI/CategoryText";
import { cn } from "../../utils/lib/cn";
import { bgTextColor, textTitle1, textTitle3 } from "../../constants/styles";
import ArticleSummary from "../../components/UI/ArticleSummary";
import Markdown from "../../components/UI/Markdown";
import RecommendationBox from "../../components/UI/RecommendationBox";
import ProductComment from "../../components/UI/ProductComment";
import WriteComment from "../../components/WriteComment";

const Article = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article", id],
    queryFn: () => getArticle(id as string),
  });
  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      {data && (
        <main className="flex gap-4 flex-col">
          <ImageSlide image={data.images[0]}>
            <>
              <h1 className={cn("text-main-white", textTitle1)}>
                {data.title}
              </h1>
              <div>
                <CategoryText
                  children={data.category}
                  className="text-main-white/70 border-main-white/70"
                />
              </div>
            </>
          </ImageSlide>
          <div className="flex p-4 gap-4 article-sidebar:flex-col">
            <section className="flex flex-col gap-8 w-full">
              <ArticleSummary
                author={data.author}
                createdAt={data.createdAt}
                likes={data.likes}
                views={data.likes}
              />
              <Markdown text={data.description} />
              <section className="flex flex-col gap-4" id="comments">
                <h2 className={cn(textTitle3, bgTextColor)}>آخرین نظرات</h2>
                <ul>
                  {data.comments.map((comment) => (
                    <ProductComment
                      key={comment._id}
                      comment={comment.comment}
                      name={
                        comment.user.first_name + " " + comment.user.last_name
                      }
                      date={comment.createdAt}
                    />
                  ))}
                </ul>
                <WriteComment type="blog" postId={data._id} />
              </section>
            </section>
            <section className="sticky top-2 flex flex-col gap-4 basis-[27rem] max-w-[27rem]">
              <RecommendationBox title="مقالات پیشنهادی" data={data.related} />
              <RecommendationBox title="جدیدترین مقالات" data={data.latest} />
            </section>
          </div>
        </main>
      )}
    </WithLoaderAndError>
  );
};

export default Article;
