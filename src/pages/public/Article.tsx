import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api/article";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import ImageSlide from "../../components/UI/ImageSlide";
import CategoryText from "../../components/UI/CategoryText";
import { cn } from "../../utils/lib/cn";
import {
  bgProductPage,
  bgTextColor,
  textBody1Bold,
  textBody3,
  textTitle1,
  textTitle3,
} from "../../constants/styles";
import ArticleSummary from "../../components/UI/ArticleSummary";
import Markdown from "../../components/UI/Markdown";
import RecommendationBox from "../../components/UI/RecommendationBox";
import ProductComment from "../../components/UI/ProductComment";
import WriteComment from "../../components/WriteComment";
import ImageWrapper from "../../components/UI/ImageWrapper";

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
                  children={data.category[0]}
                  className="text-main-white/70 border-main-white/70"
                />
              </div>
            </>
          </ImageSlide>
          <div className="flex p-4 gap-4 article-sidebar:flex-col">
            <section className="flex flex-col gap-8 w-full">
              <ArticleSummary
                timeNeeded={data.timeNeeded}
                createdAt={data.createdAt}
                likes={data.numberLike}
                views={data.view}
                postId={data._id}
                postTitle={data.title}
              />
              <Markdown text={data.description} />
              <section className={cn("flex items-center gap-2", bgProductPage)}>
                <ImageWrapper
                  src={data.author?.image}
                  alt={data.author?.name}
                  className="w-9 h-9 rounded-full"
                />
                <div className="flex flex-col">
                  <p className={textBody1Bold}>{data.author?.name}</p>
                  <p className={textBody3}>{data.author?.desc}</p>
                </div>
              </section>
              <section className="flex flex-col gap-4" id="comments">
                <h2 className={cn(textTitle3, bgTextColor)}>آخرین نظرات</h2>
                <ul className="flex flex-col gap-4">
                  {data.comments.map((comment) => (
                    <ProductComment
                      key={comment._id}
                      comment={comment.text}
                      name={
                        comment.userID.first_name +
                        " " +
                        comment.userID.last_name
                      }
                      date={comment.createdAt}
                    />
                  ))}
                </ul>
                <WriteComment type="blog" postId={data._id} />
              </section>
            </section>
            <section className="sticky self-start top-2 flex flex-col gap-4 basis-[27rem] max-w-[27rem] article-sidebar:self-auto">
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
