export const Endpoints = {
  // User endpoints
  getUsers: `/api/user/list`,
  getUser: `/api/user/getUser`,
  editUser: `/api/user/editUser`,
  register: `/auth/register`,
  checkUser: `/auth/checkuser`,
  logIn: `/auth/login`,
  refreshCode: `/auth/refreshcode`,
  refreshToken: `/auth/refreshtoken`,
  getPurchasedOnlineCourses: (limit: number) =>
    `/api/user/getVideOnline/${limit}`,
  getPurchasedOfflineCourses: (limit: number) =>
    `/api/user/getVideOffline/${limit}`,
  getPurchasedInPersonCourses: (limit: number) =>
    `/api/user/getVideInPerson/${limit}`,

  // Course endpoints
  getCourses: `/api/courses`,
  getCoursesWithCategory: (category: string) => `/api/courses/${category}`,
  getCourse: (courseID: string) => `/api/courses/getCourse/${courseID}`,
  addCourse: `/admin/courses/add`,
  deleteCourse: (courseID: string) => `/admin/courses/remove/${courseID}`,
  editCourse: (courseID: string) => `/admin/courses/edit/${courseID}`,

  // Article endpoints
  getArticles: `/api/articles`,
  getArticle: (articleID: string) => `/api/articles/getArticle/${articleID}`,
  addArticle: `/admin/blog/add`,
  deleteArticle: (articleID: string) => `/admin/blog/remove/${articleID}`,
  editArticle: (articleID: string) => `/admin/blog/edit/${articleID}`,

  // Chapter endpoints
  getChapters: (courseID: string) => `/api/chapter/list/${courseID}`,
  addChapter: `/admin/chapter/add`,
  deleteChapter: (ChapterID: string) => `/admin/chapter/remove/${ChapterID}`,
  editChapter: (ChapterID: string) => `/admin/chapter/edit/${ChapterID}`,

  // Episode endpoints
  getEpisodes: (courseID: string) => `/api/episode/list/${courseID}`,
  addEpisode: `/admin/episode/add`,
  deleteEpisode: (EpisodeID: string) => `/admin/episode/remove/${EpisodeID}`,
  editEpisode: (EpisodeID: string) => `/admin/episode/edit/${EpisodeID}`,

  // Views endpoints
  getFAQs: (courseID: string) => `/api/faq/list/${courseID}`,
  addFAQ: (courseID: string) => `/admin/faq/add/${courseID}`,
  deleteFAQ: (FaqID: string) => `/admin/faq/remove/${FaqID}`,
  editFAQ: (FaqID: string) => `/admin/faq/edit/${FaqID}`,

  // Images endpoints
  addImages: `/admin/image/add`,
  editImage: (id: string) => `/admin/image/edit/${id}`,

  // view logic endpoints
  getUserIp: `https://api.ipify.org`,
  submitView: `/view/add`,

  // main views endpoints
  getViews: `/admin/view/getAllView`,
  addView: `/admin/view/add`,
  deleteView: (ViewsID: string) => `/admin/view/remove/${ViewsID}`,
  editView: (ViewsID: string) => `/admin/view/edit/${ViewsID}`,

  // basket endpoints
  payment: `/api/payment/zarinpal`,
  orderDetail: (id: string) => `/api/payment/getAuthority/${id}`,

  // comment endpoints
  addCommentToBLog: `/api/comment/addCommentToBLog`,
  addCommentTocourse: `/api/comment/addCommentTocourse`,
  setStatus: `/api/comment/sendstatus`,

  // filter endpoints
  filterProducts: (
    type: "course" | "blog",
    search?: string | null,
    query?: string | null
  ) => `/api/filter/${search}/${query}/${type}`,
  searchAllProducts: (search: string) => `/api/filter/search?search=${search}`,

  // post endpoints
  getStates: `/state/getState`,
  getCities: (stateId: number) => `/town/getTownsByStateId?stateId=${stateId}`,
  getPrice: `/newgetprice`,

  // sales endpoints
  getSales: `/api/payment/getSale`,

  // discount code endpoints
  addDiscountCode: `/admin/code/add`,
  removeDiscountCode: (discountId: string) =>
    `/admin/code/remove/${discountId}`,
  checkDiscountCode: `/admin/code/check`,
  getCodes: `/admin/code/list`,

  // contatc US endpoints
  contactAdd: `/api/contact/add`,
  getAllContacts: `/api/contact/getAll`,
  setContactStatus: (contactId: string) =>
    `/api/contact/sendStatus/${contactId}`,

  // Event endpoints
  getAllEvents: `/admin/event/list`,
  addEvent: `/admin/event/add`,
  editEvent: (eventId: string) => `/admin/event/edit/${eventId}`,
  removeEvent: (eventId: string) => `/admin/event/remove/${eventId}`,

  // slideshow slides endpoints
  getAllSlides: `/admin/slider/list`,
  addSlide: `/admin/slider/add`,
  removeSlide: (slideId: string) => `/admin/slider/delete/${slideId}`,
};


