export type imageSlide = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
};

export type Course = {
  id: number;
  title: string;
  shortText: string;
  description: string;
  category: string;
  image: string;
  price: number;
  discount: number;
  priceAfterDiscount: number;
  sortByNumber: number;
  lastUpdate: number;
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
};

export type Article = {
  author: {
    image: string;
    name: string;
  };
  id: number;
  title: string;
  shortText: string;
  description: string;
  category: string;
  image: string;
  sortByNumber: number;
  createdAt: number;
  likes: number;
  views: number;
};
