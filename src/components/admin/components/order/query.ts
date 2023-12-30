import { patchQueryHelper, postQueryHelper } from "helpers";

export const getSelectOrder = (userId: string | undefined) => {
 return postQueryHelper("/order/select-all-order", { userId });
};
export const updateOrder = (id: string, parameters: any) => {
 return patchQueryHelper(`/order/update-order/${id}`, parameters);
};
