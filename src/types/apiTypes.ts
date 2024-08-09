type IdSchema = {
  _id: string;
};

type CommentStatus = "pending" | "approved" | "rejected";

export type Category = IdSchema & {
  title: string;
  type: "course" | "blog";
};

export type Episode = IdSchema & {
  title: string;
  time: {
    min: number | string;
    seconds: number | string;
  };
};

export type Chapter = IdSchema & {
  title: string;
  time: {
    hour: number | string;
    min: number | string;
  };
  episodes: Episode[];
};

export type CommentProduct = IdSchema & {
  title: string;
};

export type Faq = IdSchema & {
  question: string;
  answer: string;
};

export type Comment = IdSchema & {
  comment: string;
  createdAt: string;
  updatedAt: string;
  show: boolean;
  isShowAdmin: boolean;
  userID: User;
  answer: Omit<Comment, "answer">[];
  status: CommentStatus;
  courseID?: CommentProduct;
  blogID?: CommentProduct;
};

export type imageSlide = IdSchema & {
  title: string;
  subtitle?: string;
  description?: string;
  images: string[];
  url?: string;
};

export type Course = IdSchema & {
  title: string;
  shortText: string;
  Description: string;
  category: string[];
  images: string[];
  price: number;
  discount: number;
  priceAfterDiscount: number;
  sortByNumber: number;
  createdAt: string;
  neededTime: {
    hour: number;
    minute: number;
  };
  level: string;
  owner: {
    image: string;
    name: string;
  };
  rating: {
    rate: number;
    count: number;
  };
  chapters: Chapter[];
  comments: Comment[];
  related: Course[];
  language: string;
  prerequisitesText: string;
  prerequisites: Course[];
  type: "online" | "offline";
  spotPlayerID: string;
  faqs: Faq[];
};

export type Article = IdSchema & {
  author: {
    image: string;
    name: string;
  };
  title: string;
  shortText: string;
  description: string;
  category: string[];
  images: string[];
  sortByNumber: number;
  createdAt: string;
  numberLike: number;
  view: number;
  comments: Comment[];
  related: [];
  latest: [];
};

export type User = {
  Role: string[];
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  bought: Course[];
  likes: {
    course: Course[];
    blog: Article[];
  };
} & IdSchema;

export type UserResponse = {
  token: string;
  refreshToken: string;
  user: User;
};

export type Certificate = IdSchema & {
  title: string;
  createdAt: string;
  description: string;
  downloadUrl: string;
  course: CommentProduct;
  user: User;
  status: CommentStatus;
};

export type Ticket = IdSchema & {
  title: string;
  phone: string;
  desc: string;
  createdAt: string;
};

export type GetCourses = [
  string | undefined,
  number | undefined,
  string | undefined
];
export type GetArticles = GetCourses;

export type SearchResponse = {
  blog: Article[];
  course: Course[];
};

export type DiscountCode = IdSchema & {
  code: string;
  discount: string;
};

export type UploadedImage = IdSchema & {
  images: string[];
};
