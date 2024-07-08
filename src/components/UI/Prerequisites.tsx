import { forwardRef } from "react";
import { Course } from "../../types/apiTypes";
import {
  bgProductPage,
  bgTextColor,
  textBody1,
  textTitle3,
} from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import ImageWrapper from "./ImageWrapper";
import Button from "./Button";
import { Link } from "react-router-dom";
import { toUrl } from "../../utils/toUrl";

type Props = {
  title: string;
  description: string;
  products: Course[];
  sectionId: string;
};

const Prerequisites = forwardRef<HTMLDivElement, Props>(
  ({ description, products, title, sectionId }, ref) => {
    return (
      <section ref={ref} className="flex flex-col gap-4" id={sectionId}>
        <h2 className={cn(textTitle3, bgTextColor)}>{title}</h2>
        <p className={cn(bgProductPage, textBody1)}>{description}</p>
        {products && products.length > 0 ? (
          <ul className={bgProductPage}>
            {products.map((product) => {
              const link = `/course/${product?._id}/${toUrl(product?.title)}`;
              return (
                <li key={product._id} className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <ImageWrapper
                      src={product.image}
                      alt={product.title + " عکس"}
                      className="w-8 h-8 rounded-full"
                    />
                    <h3>{product.title}</h3>
                  </div>
                  <Link to={link}>
                    <Button intent="secondary" size="base" role="link">
                      مشاهده
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </section>
    );
  }
);

export default Prerequisites;
