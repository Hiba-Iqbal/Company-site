import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const getLat = (location) => {
  if (!location) {
    return 25.3430485;
  }
  return location[0];
};

export const getLng = (location) => {
  if (!location) {
    return 50.6572839;
  }
  return location[1];
};

//validate email
export const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

//validate phone
export const validatePhone = (phone) => {
  const re =
    /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
  return re.test(String(phone).toLowerCase());
};

export function useWindowSize() {
  const [dimension, setDimension] = useState(null);
  function handleResize() {
    if (window.innerWidth > 0 && window.innerWidth <= 540)
      return setDimension("mobile");
    else if (window.innerWidth > 540 && window.innerWidth <= 991)
      return setDimension("tablet");
    else if (window.innerWidth > 991) return setDimension("desktop");
    else return setDimension(null);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return dimension;
}

export const openLiveChat = () => {
  try {
    // debugger;
    // zE("messenger", "open");
    // zE('webWidget:on', 'open', function() {
    //   console.log('The widget has been opened!');
    // });
    // zE('webWidget', 'open');
    zE("webWidget:on", "open", function () {
      console.log("The widget has been opened!");
    });
  } catch (error) {
    console.log(error);
  }
};

export const useCounter = ({ max = 3, delay = 3000 } = {}) => {
  const [counter, setCounter] = useState(0);
  var interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCounter((counter) => ++counter % max);
    }, delay);
  }, []);

  // console.log(counter)

  return counter;
};

// export const numberWithCommas = (x) => {
//   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
// };
export const numberWithCommas = (x) => {
  return x.toLocaleString();
};

const instance = axios.create({
  baseURL: "https://backend-develop.thecoredesigns.com",
  timeout: 60000,
});

// axios.defaults.headers.common = { Authorization: `bearer ${token}` };
const request = async ({ method, url, data, headers, skipAuth }) => {
  if (method === "delete") {
    data = { data };
  }
  const promise = instance[method](url, data, headers);
  try {
    const response = await promise;
    const payload = response.data;
    if (headers) {
      return {
        data: payload,
        headers: response.headers,
      };
    }

    return payload;
  } catch (err) {
    let msg = err.response.data.message;
    if (err.response.data.details) {
      msg = err.response.data.details.message;
    }
    throw new Error(msg);
  }
};

export const getArrayStringFromString = (str) => {
  return str.split("\n");
};

export const get = (url, params) => request({ method: "get", url, ...params });
export const post = (url, data, params) =>
  request({ method: "post", url, data, ...params });
export const put = (url, data, params) =>
  request({ method: "put", url, data, ...params });
export const del = (url, data) => request({ method: "delete", url, data });
export const patch = (url, data, params) =>
  request({ method: "patch", url, data, ...params });

export const trigger = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const executeScroll = (ref) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  ref.current.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// check string word length if it is more than 20 words then return words with dot notation
export const checkStringWordLength = (str, maxCount) => {
  const words = str.split(" ");
  if (words.length > maxCount) {
    return `${words.slice(0, maxCount).join(" ")}...`;
  }
  return str;
};
export const fetchResponse = async (url) => {
  try {
    var res = await fetch(url);
    var data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createMarkup = (html) => {
  return { __html: html };
};

// get format date from date string
export const getFormatDate = (date) => {
  const newDate = new Date(date);
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${newDate.getDate()}/${
    monthNames[newDate.getMonth() + 1]
  }/${newDate.getFullYear()}`;
};
