import { GetArticles, GetCourses } from "../types/apiTypes";

export const Endpoints = {
  // User endpoints
  registerOtp: `/auth/registerStepOne`,
  register: `/auth/registerStepTwo`,
  logIn: `/auth/login`,
  checkOtp: `/auth/checkOtp`,
  resetCode: `/auth/resetCode`,
  refreshToken: `/auth/refreshToken`,
  getMyCourses: `/getAllCourse`,
  getMyLikes: `/getAllCourse`,
  getMyComments: `/user/getAllComment`,
  getMyCertificates: `/user/getAllCertificate`,
  getUsers: `/api/user/list`,
  getUser: `/api/user/getUser`,
  editUser: `/api/user/editUser`,

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
  getEpisodes: (courseID: string) => `/getEpisodesOfChpater/${courseID}`,
  addEpisode: `/createEpisode`,
  deleteEpisode: (EpisodeID: string) => `/deleteEpisode/${EpisodeID}`,

  // category
  getCategories: (type: "course" | "blog" | undefined) =>
    `/getAllCategory/${type}`,
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

  // basket endpoints
  payment: `/bascket`,
  orderDetail: (id: string) => `/api/payment/getAuthority/${id}`,
  updateBasket: `/basket/update`,

  // comment endpoints
  addComment: `/comment/addComment`,
  setCommentStatus: (commentId: string) => `/comment/changeStatus/${commentId}`,
  deleteComment: (commentId: string) => `/comment/deleteComment/${commentId}`,

  // filter endpoints
  searchAll: (query: string) => `/searchAll?search?${query}`,
  searchCourse: (query: string) => `/searchCourse?search?${query}`,
  searchBlog: (query: string) => `/searchBlog?search?${query}`,

  // sales endpoints
  getSales: `/api/payment/getSale`,

  // discount code endpoints
  addDiscountCode: `/admin/code/add`,
  removeDiscountCode: (discountId: string) =>
    `/admin/code/remove/${discountId}`,
  checkDiscountCode: `/checkCode`,
  getCodes: `/admin/code/list`,

  // contact US endpoints
  addTicket: `/tiket/add`,
  getAllTickets: `/tiket/readAll`,
  deleteTicket: (ticketId: string) => `/tiket/remove/${ticketId}`,

  // slideshow slides endpoints
  getAllSlides: `/admin/slider/list`,
  addSlide: `/admin/slider/add`,
  removeSlide: (slideId: string) => `/admin/slider/delete/${slideId}`,
};
