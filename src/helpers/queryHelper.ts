/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { API_SERVER } from "./variable";

function getQueryHelper(url: string) {
 const authorization = JSON.parse(localStorage.getItem("user") || "[]").token;
 return new Promise((resolve, reject) => {
  axios({
   method: "GET",
   url: API_SERVER + url,
   headers: {
    "Content-Type": "application/json; charset=utf-8",
    Platform: "WEB",
    Authorization: "Bearer " + authorization,
   },
  })
   .then((response) => {
    resolve(response.data);
   })
   .catch((error) => {
    reject(error);
   });
 });
}
async function getAuthQuery(url: string) {
 const authorization = JSON.parse(localStorage.getItem("user") || "[]").token;
 console.log(
  "🚀 ~ file: queryHelper.ts:28 ~ getAuthQuery ~ authorization:",
  authorization
 );

 return new Promise((resolve) => {
  axios({
   method: "GET",
   url: API_SERVER + url,
   headers: {
    "Content-Type": "application/json; charset=utf-8",
    Platform: "WEB",
    Authorization: "Bearer " + authorization,
   },
  })
   .then((response) => {
    resolve(response.data);
   })
   .catch((error) => {
    resolve({ message: "error", ...error });
   });
 });
}

function postQueryHelper(url: string, parameters: any) {
 const authorization = JSON.parse(localStorage.getItem("user") || "[]").token;

 return new Promise((resolve, reject) => {
  axios({
   method: "POST",
   url: API_SERVER + url,
   data: parameters,
   headers: {
    "Content-Type": "application/json; charset=utf-8",
    Platform: "WEB",
    Authorization: "Bearer " + authorization,
   },
  })
   .then((response) => {
    resolve(response.data);
   })
   .catch((error) => {
    resolve({
     type: "error",
     ...error,
    });
   });
 });
}
function postQueryHelperForm(url: string, parameters: any) {
 const authorization = JSON.parse(localStorage.getItem("user") || "[]").token;

 return new Promise((resolve, reject) => {
  axios({
   method: "POST",
   url: API_SERVER + url,
   data: parameters,
   headers: {
    "Content-Type": "multipart/form-data",
    Platform: "WEB",
    Authorization: "Bearer " + authorization,
   },
  })
   .then((response) => {
    resolve(response.data);
   })
   .catch((error) => {
    resolve({
     type: "error",
     ...error,
    });
   });
 });
}
function deleteQueryHelper(url: string) {
 const authorization = JSON.parse(localStorage.getItem("user") || "[]").token;

 return new Promise((resolve) => {
  axios({
   method: "DELETE",
   url: API_SERVER + url,
   headers: {
    "Content-Type": "application/json; charset=utf-8",
    Platform: "WEB",
    Authorization: "Bearer " + authorization,
   },
  })
   .then((response) => {
    resolve(response.data);
   })
   .catch((error) => {
    resolve({
     type: "error",
     ...error,
    });
   });
 });
}

function putQueryHelper(url: string, parameters: any) {
 return new Promise((resolve, reject) => {
  axios({
   method: "PUT",
   url: API_SERVER + url,
   data: parameters,
  })
   .then((response) => {
    resolve(response.data);
   })
   .catch((error) => {
    reject(error);
   });
 });
}
function patchQueryHelper(url: string, parameters: any) {
 const authorization = JSON.parse(localStorage.getItem("user") || "[]").token;
 return new Promise((resolve, reject) => {
  axios({
   method: "PATCH",
   url: API_SERVER + url,
   data: parameters,
   headers: {
    "Content-Type": "application/json; charset=utf-8",
    Platform: "WEB",
    Authorization: "Bearer " + authorization,
   },
  })
   .then((response) => {
    resolve(response.data);
   })
   .catch((error) => {
    resolve({
     type: "error",
     ...error,
    });
   });
 });
}
export {
 getAuthQuery,
 getQueryHelper,
 postQueryHelper,
 deleteQueryHelper,
 putQueryHelper,
 patchQueryHelper,
 postQueryHelperForm,
};
