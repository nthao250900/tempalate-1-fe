import { isObject } from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import { theme } from "theme";
import { API_SERVER } from "helpers/variable";
import { UploadBeforeHandler } from "suneditor-react/dist/types/upload";
import { postQueryHelper, postQueryHelperForm } from "helpers";
import { PreviewTemplate } from "./TextEditor/preview";
import { ButtonList } from "./TextEditor/ButtonList";
import plugins from "suneditor/src/plugins";
import mergeTag from "./TextEditor/plugin";
import { PluginImport } from "./TextEditor/pluginCustomer";

type TProps = {
 onChange: Function;
 value?: string;
};

const editorOptions = {
 plugins: PluginImport,
 height: "800px",
 buttonList: ButtonList,
 position: "",
 display: "",
 imageRotation: true,
 fontSize: [12, 14, 16, 18, 20],
 colorList: [""],
 previewTemplate: PreviewTemplate,
};

interface YourObjectType {
 [key: string]: string;
}
const TextEditor = ({ onChange, value }: TProps) => {
 const editor = useRef<SunEditorCore>();
 const colorsTheme: any = theme.colors;
 const [colorOption, setColorOption] = useState<string[]>([]);
 const optionPlugin = () => {
  // const optionPluginArr: any= [];
  // Object.keys(plugins).map((key: any) => optionPluginArr.push(plugins[key]));
 };
 const optionColor = useCallback(() => {
  const colorCustom: string[] = [];
  Object.keys(colorsTheme).map((keysColor: string) => {
   const color: YourObjectType = colorsTheme[keysColor];
   if (!isObject(color)) return colorCustom.push(color);
   return Object.keys(color).map((key: string) => colorCustom.push(color[key]));
  });
  setColorOption(colorCustom);
 }, [colorsTheme]);

 const optionFontSize = () => {
  const fontSize: number[] = [];
  for (let i = 10; i < 25; i++) {
   fontSize.push(i);
  }
  editorOptions.fontSize = [...fontSize];
 };

 editorOptions.colorList = [...colorOption];
 useEffect(() => {
  optionColor();
  optionFontSize();
  optionPlugin();
 }, [optionColor]);

 const onChangeHandler = (content: string) => {
  onChange(content);
 };
 const onImageUploadBefore = (
  files: File[],
  info: object,
  uploadHandler: UploadBeforeHandler
 ) => {
  const formData = new FormData();
  if (files) {
   formData.append("file", files[0]);

   postQueryHelperForm("/upload", formData).then((res: any) => {
    const response = {
     result: [
      {
       url: API_SERVER + "/" + res.originalname,
       name: res.filename,
       size: res.size,
      },
     ],
    };
    uploadHandler(response);
   });
  }
  return undefined;
 };
 return (
  <SunEditor
   lang='en'
   onImageUploadBefore={onImageUploadBefore}
   width='100%'
   height='100%'
   defaultValue={value}
   setOptions={editorOptions}
   onChange={onChangeHandler}
  />
 );
};

export default TextEditor;
