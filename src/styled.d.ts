declare module "styled-components" {
 /* eslint-disable no-unused-vars */
 type ColorsNames =
  | "rose"
  | "pink"
  | "fuchsia"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "sky"
  | "cyan"
  | "teal"
  | "emerald"
  | "green"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "red"
  | "warmGray"
  | "trueGray"
  | "gray"
  | "coolGray"
  | "blueGray";

 type ColorsVariations =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

 type MainColors = {
  black: string;
  white: string;
  main_yellow: string;
  main_green: string;
  main_blue: string;
  main_color: string;
 };

 type Colors = MainColors &
  Record<
   ColorsNames,
   {
    [K in ColorsVariations]: string;
   }
  >;

 export interface DefaultTheme {
  colors: Colors;
 }
}

export {};
