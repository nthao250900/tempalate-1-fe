export type THeaderDataV2 = {
 id: string | number;
 idParent?: null | string | number;
 title: string;
 href: string;
};
export type TSolutionPackage = {
 solutionPackageId: string;
 solutionPackagePerformance: string;
 solutionPackagePanels: string;
 solutionPackageElectricity: string;
 solutionPackageMoney: string;
};
export type THeaderData = {
 headerTop: THeaderDataV2[];
 headerNavbar: THeaderDataV2[];
};
export type THeaderV2 = {
 id: string | number;
 title: string;
 href: string;
 subMenu?: THeaderV2[];
};
export type TCategory = {
 title: string;
 href: string;
 id: string;
 imageThumbnail: string;
};

export type TOrder = {
 createdAt: string;
 giftCode: string;
 id: string;
 information_user: string;
 notes: string;
 payment_type: string;
 productList: string;
 status: number;
 total: string;
 updatedAt: string;
 userId: string;
};

export type TProject = {
 projectId: string;
 projectImage: string;
};
export type TProduct = {
 productId: string;
 productName: string;
 productCode: string;
 productHref: string;
 productTrademark: string | null;
 productImages: string[];
 productParameter: string;
 productDescription: string;
 productActive: 0 | 1;
 categoryTitle: string;
 categoryCode: string;
 productColors: string;
 productSize: string;
 productPrice: string;
 productDiscount: string;
};

export interface TCartItems extends TProduct {
 cartQuantity: number;
}
