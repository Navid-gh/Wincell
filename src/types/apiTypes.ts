type IdSchema = {
  _id: string;
};

export type Episode = IdSchema & {
  title: string;
  time: {
    min: number | string;
    seconds: number | string;
  };
};

export type Chapter = IdSchema & {
  numberOfSessions: number | string;
  text: string;
  title: string;
  time: {
    hour: number | string;
    min: number | string;
  };
  episodes: Episode[];
};

export type Comment = IdSchema & {
  comment: string;
  createdAt: string;
  updatedAt: string;
  show: boolean;
  isShowAdmin: boolean;
  user: {
    first_name: string;
    last_name: string;
  };
  answer: Omit<Comment, "answer">[];
};

export type imageSlide = IdSchema & {
  title: string;
  subTitle: string;
  description: string;
  image: string;
};

export type Course = IdSchema & {
  title: string;
  shortText: string;
  description: string;
  category: string;
  image: string;
  price: number;
  discount: number;
  priceAfterDiscount: number;
  sortByNumber: number;
  lastUpdate: string;
  neededTime: {
    hour: number;
    minute: number;
  };
  grade: string;
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
  prerequisitesTxt: string;
  prerequisites: Course[];
};

export type Article = IdSchema & {
  author: {
    image: string;
    name: string;
  };
  title: string;
  shortText: string;
  description: string;
  category: string;
  image: string;
  sortByNumber: number;
  createdAt: string;
  likes: number;
  views: number;
  related: [];
  latest: [];
};
