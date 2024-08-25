import { PrivateAuth } from '../../types/auth';
import { createPrivateAxios } from '../axiosInstance';
import { Endpoints } from '../endpoints';

export const updateBasket = async (auth: PrivateAuth, ids: string[]) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.post(Endpoints.updateBasket, {
        basket: ids,
    });
    if (response.status === 200) {
        return response.data.listCourse;
    } else {
        throw new Error(response.statusText);
    }
};

export const Payment = async (auth: PrivateAuth, ids: string[]) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.post(Endpoints.payment, { basket: ids });
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export const orderDetail = async (auth: PrivateAuth, ids: string) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.get(Endpoints.orderDetail(ids));
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};
