const base = "http://localhost:8080/";

const request = async (url, data, token) => {
  const headersForToken = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
  const headerForMultiPart =
    typeof data.body === "string"
      ? {
          "Content-Type": "application/json;charset=utf-8",
        }
      : typeof data.body === "object"
      ? {
          "Content-Type": "multipart/form-data",
        }
      : {};
  const response = await fetch(url, {
    ...data,
    headers: {
      ...headersForToken,
      ...headerForMultiPart,
    },
  });
  if (response.ok) {
    if (response.headers.get("Content-Length") === "0") {
      return true;
    }
    const typeResponse = response.headers.get("Content-Type");
    let result;
    if (typeResponse === "application/text") {
      result = await response.text();
      return result;
    }
    result = await response.json();
    return result;
  }

  throw new Error(`status: ${response.status}`);
};

export const get = (url) => request(`${base}${url}`, { method: "GET" });

export function post(url, body) {
  return request(`${base}${url}`, { method: "POST", body });
}

export const remove = (url) => request(`${base}${url}`, { method: "DELETE" });

export function put(url, body) {
  return request(`${base}${url}`, { method: "PUT", body });
}
