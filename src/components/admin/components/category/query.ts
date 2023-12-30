import {
 deleteQueryHelper,
 getQueryHelper,
 patchQueryHelper,
 postQueryHelper,
} from "helpers";

export const getCategoryQuery = () => {
 return getQueryHelper("/category/get-all-category");
};
export const addCategoryQuery = (parameters: { title: string }) => {
 return postQueryHelper("/category/add-category", parameters);
};
export const updateCategoryQuery = (
 parameters: { title: string },
 idCategory: string
) => {
 return patchQueryHelper(`/category/update-category/${idCategory}`, parameters);
};
export const deleteCategoryQuery = (idCategory: string) => {
 return deleteQueryHelper(`/category/delete-category/${idCategory}`);
};
