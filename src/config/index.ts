export const calculateDiscount = (discount: number, price: number) => {
 return (price * ((100 - discount) / 100)).toString();
};
export const NumberPagination = 10;
