import {
 deleteQueryHelper,
 getQueryHelper,
 patchQueryHelper,
 postQueryHelper,
} from "helpers";

export type TFromValueAddProduct = {
 images?: string;
 productName?: string;
 productCode?: string;
 trademark?: string;
 categoryCode?: string;
 tags?: string[];
 colors?: string;
 size?: string;
 price?: string;
 discount?: string;
};

export interface TSaveProduct extends TFromValueAddProduct {
 productParameter?: string;
 description?: string;
 active?: 0 | 1;
}

export const getProductQuery = () => {
 return getQueryHelper("/product/get-all-product");
};

export const updateProductQuery = (
 parameters: TSaveProduct,
 idProduct: string
) => {
 return patchQueryHelper(`/product/${idProduct}`, parameters);
};

export const saveProductQuery = (parameters: TSaveProduct) => {
 return postQueryHelper("/product", parameters);
};

export const deleteProductQuery = (idProduct: string) => {
 return deleteQueryHelper(`/product/${idProduct}`);
};
