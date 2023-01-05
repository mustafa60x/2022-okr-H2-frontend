import { isEmpty } from "../utils";
import { v4 as uuidv4 } from "uuid";
import useSiteStore from "../store/site";


function parseData(data) {
  const formData = new FormData();
  for (let [key, value] of Object.entries(data) as any) {
    formData.append(key, value);
  }
  return formData;
}

function getErrorMessage(error) {
  let message = error.message || "Bir hata oluştu!";
  if (error?.statusCode === 401) {
    message = error.message;
  } else if (error?.statusCode === 500) {
    message = error.message || "Sunucu hatası!";
  } else if (error.message === "Failed to fetch") {
    message = "İstek sunucuya erişemiyor!";
  }

  return message;
}

function request(url, data = false, method = "GET", type = "FORM_DATA") {
  return new Promise(async (resolve, reject) => {
    try {
      const BASE_URL = import.meta.env.VITE_APP_API_URL + url;

      // const token = window["accessToken"] ? window["accessToken"] : 'dummy_token'
      const token = !isEmpty(localStorage.getItem("accessToken"))
        ? JSON.parse(localStorage.getItem("accessToken"))
        : "";

      const headers = new Headers();
      headers.append("Content-type", "application/json");
      headers.append("Authorization", "Bearer " + token);

      const options = {
        method,
        headers,
      } as any;

      if (data && method === "POST") {
        options.body = type === "JSON" ? JSON.stringify(data) : parseData(data);
      }

      useSiteStore.setState((state) => ({ isLoading: true }));

      const response = await fetch(BASE_URL, options);
      const result = await response.json();

      useSiteStore.setState((state) => ({ isLoading: false }));

      if (response.ok) {
        resolve(result.data);
      } else {
        await useSiteStore.setState((state) => ({
          errors: [
            ...state.errors,
            { id: uuidv4(), message: getErrorMessage(result) },
          ],
        }));
        reject(result);
      }
    } catch (error: any) {
      useSiteStore.setState((state) => ({ isLoading: false }));

      await useSiteStore.setState((state) => ({
        errors: [
          ...state.errors,
          { id: uuidv4(), message: getErrorMessage(error) },
        ],
      }));
      reject(error);
    }
  });
}

export const post = (url, data) => request(url, data, "POST");
export const postJSON = (url, data) => request(url, data, "POST", "JSON");
export const get = (url) => request(url);
