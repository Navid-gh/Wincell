import {
  DiscountCode,
  Faq,
  imageSlide,
  SearchResponse,
  Ticket,
  UploadedImage,
  User,
} from "../types/apiTypes";
import { PrivateAuth } from "../types/auth";
import axiosInstance, { createPrivateAxios } from "./axiosInstance";
import { Endpoints } from "./endpoints";

type AddTicket = {
  phone: string;
  title: string;
  desc: string;
};

type addFaq = Pick<Faq, "answer" | "question"> & {
  type: string;
  courseID?: string;
};

// Search
export const searchAll = async (query: string): Promise<SearchResponse> => {
  const response = await axiosInstance.get(Endpoints.searchAll(query));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

// images
export const addImage = async (
  auth: PrivateAuth,
  images: File[]
): Promise<string[]> => {
  const privateAxios = createPrivateAxios(auth);
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  const response = await privateAxios.post(Endpoints.addImages, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (response.status === 201) {
    return response.data.urlImage;
  } else {
    throw new Error(response.statusText);
  }
};

export const getImages = async (
  auth: PrivateAuth
): Promise<UploadedImage[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getImages);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

// ticket
export const addTicket = async (data: AddTicket) => {
  const response = await axiosInstance.post(Endpoints.addTicket, data);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const getAllTickets = async (auth: PrivateAuth): Promise<Ticket[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getAllTickets);
  if (response.status === 200) {
    return response.data.readTikets;
  } else {
    throw new Error(response.statusText);
  }
};

export const deleteTicket = async (auth: PrivateAuth, ticketId: string) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.delete(Endpoints.deleteTicket(ticketId));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

// discountCode
export const getAllCodes = async (
  auth: PrivateAuth
): Promise<DiscountCode[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getCodes);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
export const checkCode = async (auth: PrivateAuth, code: string) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.checkDiscountCode, {
    code,
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const deleteCode = async (auth: PrivateAuth, codeId: string) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.delete(
    Endpoints.deleteDiscountCode(codeId)
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const addCode = async (
  auth: PrivateAuth,
  code: string,
  discount: string
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addDiscountCode, {
    code,
    discount,
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

// slide show
export const getSlides = async (): Promise<imageSlide[]> => {
  const response = await axiosInstance.get(Endpoints.getAllSlides);
  if (response.status === 200) {
    return response.data.getAll;
  } else {
    throw new Error(response.statusText);
  }
};
export const addSlide = async (
  auth: PrivateAuth,
  data: Partial<imageSlide>
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.addSlide;
  const response = await privateAxios.post(endpoint, data);
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
export const deleteSlide = async (auth: PrivateAuth, SlideId: string) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.removeSlide(SlideId);
  const response = await privateAxios.delete(endpoint);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

// FAQ
export const getFAQ = async (): Promise<Faq[]> => {
  const response = await axiosInstance.get(Endpoints.getFAQs);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const addFAQ = async (auth: PrivateAuth, data: addFaq) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.addFAQ;
  const response = await privateAxios.post(endpoint, data);
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const editFAQ = async (
  auth: PrivateAuth,
  FAQId: string,
  data: Partial<Faq>
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.editFAQ(FAQId);
  const response = await privateAxios.put(endpoint, data);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const deleteFAQ = async (auth: PrivateAuth, FAQId: string) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.delete(Endpoints.deleteFAQ(FAQId));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

// Users
export const getUsers = async (auth: PrivateAuth): Promise<User[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getUsers);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const getSales = async (auth: PrivateAuth): Promise<any[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getSales);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
