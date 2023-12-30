import _ from "lodash";

export const FormatDataHeader = (dataHeader: any[]) => {
 const newNavbar = _.filter(dataHeader, { idParent: null });
 return newNavbar.map((item: any) => ({
  ...item,
  subMenu: _.filter(dataHeader, { idParent: item.id }),
 }));
};
