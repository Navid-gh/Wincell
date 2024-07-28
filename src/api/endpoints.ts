import { GetArticles, GetCourses } from "../types/apiTypes";

export const Endpoints = {
  // User endpoints
  getUsers: `/api/user/list`,
  getUser: `/api/user/getUser`,
  editUser: `/api/user/editUser`,
  register: `/auth/register`,
  checkUser: `/userExistence`,
  logIn: `/auth/login`,
  refreshCode: `/auth/refreshcode`,
  refreshToken: `/auth/refreshtoken`,
  getMyCourses: `/getAllCourse`,
  getMyLikes: `/getAllCourse`,
  getMyComments: `/getMyComments`,
  getMyCertificates: `/getMyCertificates`,

  // Course endpoints
  getCourses: (
    categoryId: GetCourses[0],
    limit: GetCourses[1],
    filter: GetCourses[2]
  ) => `/getAllCourse/${categoryId}/${limit}/${filter}`,
  getCourse: (courseID: string) => `/getOnecourse/${courseID}`,
  addCourse: `/createCourse`,
  deleteCourse: (courseID: string) => `/deleteCourse/${courseID}`,
  editCourse: (courseID: string) => `/updateCourse/${courseID}`,

  // Article endpoints
  getArticles: (
    categoryId: GetArticles[0],
    limit: GetArticles[1],
    filter: GetArticles[2]
  ) => `/getAllBlog/${categoryId}/${limit}/${filter}`,
  getArticle: (articleID: string) => `/getOneBlog/${articleID}`,
  addArticle: `/createBlog`,
  deleteArticle: (articleID: string) => `/deleteBlog/${articleID}`,
  editArticle: (articleID: string) => `/updateBlog/${articleID}`,

  // Chapter endpoints
  getChapters: (courseID: string) => `/api/chapter/list/${courseID}`,
  addChapter: `/addChapter`,
  deleteChapter: (ChapterID: string) => `/chapter/delete/${ChapterID}`,
  editChapter: (ChapterID: string) => `/chapter/update/${ChapterID}`,

  // Episode endpoints
  getEpisodes: (courseID: string) => `/api/episode/list/${courseID}`,
  addEpisode: `/createEpisode`,
  deleteEpisode: (EpisodeID: string) => `/chapter/delete/${EpisodeID}`,
  editEpisode: (EpisodeID: string) => `/deleteEpisode/${EpisodeID}`,

  // category
  getCategories: (type: "course" | "article" | "") => `/all`,
  addCategory: `/addCategory`,
  editCategory: (categoryID: string) => `/updateCategory/${categoryID}`,
  deleteCategory: (categoryID: string) => `/deleteCategory/${categoryID}`,
  getOneCategory: (categoryID: string) => `/getOneCategory/${categoryID}`,

  // certificate endpoints
  getCertificates: `/evidence/getAll`,
  addCertificate: `/evidence/addEvidence`,

  // Faqs endpoints
  getFAQs: (courseID: string) => `/api/faq/list/${courseID}`,
  addFAQ: (courseID: string) => `/admin/faq/add/${courseID}`,
  deleteFAQ: (FaqID: string) => `/admin/faq/remove/${FaqID}`,
  editFAQ: (FaqID: string) => `/admin/faq/edit/${FaqID}`,

  // Images endpoints
  addImages: `/addImage`,
  editImage: (id: string) => `/admin/image/edit/${id}`,
  deleteImage: (id: string) => `/admin/image/remove/${id}`,
  getImages: `/admin/image/list`,

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
  addCommentTocourse: `/comment/addComment`,
  setStatus: (commentId: string) => `/comment/changeStatus/${commentId}`,
  deleteComment: (commentId: string) => `/comment/deleteComment/${commentId}`,

  // filter endpoints
  searchAllProducts: (search: string) => `/api/filter/search?search=${search}`,

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


