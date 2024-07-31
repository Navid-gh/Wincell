export type FilterItem = {
  title: string;
  key?: string;
  _id?: string;
};

export const coursesSorts = [
  {
    title: "جدید ترین",
    key: "latest",
  },
  {
    title: "قدیمی ترین",
    key: "oldest",
  },
  {
    title: "محبوب ترین",
    key: "popular",
  },
  {
    title: "گران ترین",
    key: "highest",
  },
  {
    title: "ارزان ترین",
    key: "lowest",
  },
];

export const articlesSorts = [
  {
    title: "جدید ترین",
    key: "latest",
  },
  {
    title: "قدیمی ترین",
    key: "oldest",
  },
  {
    title: "محبوب ترین",
    key: "popular",
  },
];
