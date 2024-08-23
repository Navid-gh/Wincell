import { GetArticles, GetCourses } from '../types/apiTypes';

export const Endpoints = {
    // User endpoints
    registerOtp: `/auth/registerStepOne`,
    register: `/auth/registerStepTwo`,
    logIn: `/auth/login`,
    checkOtp: `/auth/checkOtp`,
    resetCode: `/auth/resetCode`,
    refreshToken: `/auth/refreshToken`,
    getMyCourses: `/user/getBought`,
    getMyLikes: `/getAllCourse`,
    getMyComments: `/user/getAllComment`,
    getMyCertificates: `/user/getAllCertificate`,
    getUsers: `/user/getAllUser`,

    // Course endpoints
    getCourses: (categoryId: GetCourses[0], limit: GetCourses[1], filter: GetCourses[2]) =>
        `/getAllCourse/${categoryId}/${limit}/${filter}`,
    getCourse: (courseID: string) => `/getOnecourse/${courseID}`,
    addCourse: `/createCourse`,
    deleteCourse: (courseID: string) => `/deleteCourse/${courseID}`,
    editCourse: (courseID: string) => `/updateCourse/${courseID}`,
    likeCourse: (courseID: string) => `/course/addLike/${courseID}`,

    // Article endpoints
    getArticles: (categoryId: GetArticles[0], limit: GetArticles[1], filter: GetArticles[2]) =>
        `/getAllBlog/${categoryId}/${limit}/${filter}`,
    getArticle: (articleID: string) => `/getOneBlog/${articleID}`,
    addArticle: `/createBlog`,
    deleteArticle: (articleID: string) => `/deleteBlog/${articleID}`,
    editArticle: (articleID: string) => `/updateBlog/${articleID}`,
    likeArticle: (articleID: string) => `/blog/addLike/${articleID}`,

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
    getCategories: (type: 'course' | 'blog' | undefined) => `/getAllCategory/${type}`,
    addCategory: `/addCategory`,
    editCategory: (categoryID: string) => `/updateCategory/${categoryID}`,
    deleteCategory: (categoryID: string) => `/deleteCategory/${categoryID}`,
    getOneCategory: (categoryID: string) => `/getOneCategory/${categoryID}`,

    // certificate endpoints
    getCertificates: `/evidence/getAll`,
    addCertificate: `/evidence/addEvidence`,

    // Faqs endpoints
    getFAQs: `/faq/readFaq/undefined/all`,
    addFAQ: `/faq/create`,
    deleteFAQ: (FaqID: string) => `/faq/delete/${FaqID}`,
    editFAQ: (FaqID: string) => `/admin/faq/edit/${FaqID}`,

    // Images endpoints
    addImages: `/addImage`,
    editImage: (id: string) => `/admin/image/edit/${id}`,
    deleteImage: (id: string) => `/admin/image/remove/${id}`,
    getImages: `/admin/image/list`,

    // basket endpoints
    payment: `/bascket`,
    orderDetail: (id: string) => `/getAuthority/${id}`,
    updateBasket: `/basket/update`,

    // comment endpoints
    addComment: `/comment/addComment`,
    setCommentStatus: (commentId: string) => `/comment/changeStatus/${commentId}`,
    deleteComment: (commentId: string) => `/comment/deleteComment/${commentId}`,
    getAllComments: `/comment/readByAdmin`,

    // filter endpoints
    searchAll: (query: string) => `/searchAll?search?${query}`,
    searchCourse: (query: string) => `/searchCourse?search?${query}`,
    searchBlog: (query: string) => `/searchBlog?search?${query}`,

    // sales endpoints
    getSales: `/basket/getAllSold`,

    // discount code endpoints
    addDiscountCode: `/code/add`,
    deleteDiscountCode: (discountId: string) => `/code/delete/${discountId}`,
    checkDiscountCode: `/checkCode`,
    getCodes: `/code/getAllCode`,

    // contact US endpoints
    addTicket: `/tiket/add`,
    getAllTickets: `/tiket/readAll`,
    deleteTicket: (ticketId: string) => `/tiket/remove/${ticketId}`,

    // slideshow slides endpoints
    getAllSlides: `/slider/getAll`,
    addSlide: `/slider/addSlider`,
    removeSlide: (slideId: string) => `/slider/remove/${slideId}`,
};
