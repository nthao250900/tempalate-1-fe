export interface TRouteChildren {
 name: string;
 path: string;
 icon?: string | JSX.Element;
 component: JSX.Element | string | undefined;
}

export interface TRoutes {
 layout: string;
 component?: JSX.Element;
 path?: string;
 title?: string;
 views: TRouteChildren[];
}
