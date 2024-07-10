import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

type Props = {
  titleTemplate: string;
  description: string;
  Url: string;
  keywords: string;
  ogImage?: string;
  children?: ReactNode;
};

const SeoTags = ({
  titleTemplate,
  description,
  Url,
  keywords,
  ogImage,
  children,
}: Props) => {
  ogImage = ogImage || "https://wincell.ir/og-image.png";
  const imgType = ogImage.split(".").pop();
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleTemplate} | وینسل</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={Url} />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={titleTemplate} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={Url} />
        <meta property="og:site_name" content="وینسل" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="300" />
        <meta property="og:site_name" content="وینسل" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:type" content={imgType} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={titleTemplate} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        {children}
      </Helmet>
    </HelmetProvider>
  );
};

export default SeoTags;
