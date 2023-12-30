export * from "./v2";

export type TNavBarData = {
 id: string;
 idParent: string | null;
 title: string;
 href: string;
};
export type TCardProduct = {
 image: string;
 title: string;
 description: string;
 button?: {
  href: string;
  text: string;
  icon?: any;
 };
 slug?: string;
};
export type TNew = {
 title: string;
 slug: string;
 image: string;
 subTitle: string;
 date: string;
 postedBy: string;
 content: string;
 tags: string[];
};

export type TContactInfo = {
 email: {
  label: string;
  Link: string;
 };
 address: string;
 phone: {
  label: string;
  link: string;
 }[];
};
export type TSocial = {
 facebook?: string;
 youtube?: string;
 instagram?: string;
 zalo?: string;
 tiktok?: string;
 twitter?: string;
};
export type TCarousel = {
 id: string;
 imageUrl: string;
 active: boolean;
 order: number;
};
export type TSolution = {
 solutionId: string;
 solutionName: string;
 solutionSlug: string;
 solutionHtmlFile: string;
};
export type TNews = {
 id: string;
 imageThumbnail: string;
 title: string;
 summary: string;
 href: string;
 html: string;
 date: string;
};
