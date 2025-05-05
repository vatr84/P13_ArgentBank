const API_URL = "http://localhost:3001/api/v1";
let options = null;

// API Call
async function callApi(actionType, url, req) {
  switch (actionType) {
    case "login":
      options = loginUser(req);
      break;

    case "getUserInfo":
      options = getUserProfile(req);
      break;

    case "modifyUserInfo":
      options = updateUserProfile(req);
      break;

    default:
      break;
  }

  const res = await fetch(`${API_URL}${url}`, options);
  const data = !res.ok ? Number(res.status) : await res.json();

  return data;
}

// API Call - User Login
const loginUser = (userCredentials) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCredentials),
  };
};

// API Call - get User Profile
const getUserProfile = (userCredentials) => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userCredentials}`,
    },
  };
};

// API Call - Update User Profile
const updateUserProfile = (data) => {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.userCredentials}`,
    },
    body: JSON.stringify(data.newUserInfo),
  };
};

export default callApi;
