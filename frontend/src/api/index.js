const API_URL = process.env.REACT_APP_API_URL;

class API {
  POST(url, data) {
    return fetch(API_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });
  }

  GET(url) {
    return fetch(API_URL + url, {
      headers: {
        Authorization: "Token " + localStorage.getItem("access_token"),
      },
    });
  }

  PUT(url, data) {
    return fetch(API_URL + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });
  }

  DELETE(url) {
    return fetch(API_URL + url, {
      method: "DELETE",
      headers: {
        Authorization: "Token " + localStorage.getItem("access_token"),
      },
    });
  }

  LOGIN(url, data) {
    return fetch(API_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  REGISTER(url, data) {
    return fetch(API_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  LOGOUT(){
    return fetch(API_URL + "/auth/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("access_token"),
      },
    });
  }
}

export default new API();
