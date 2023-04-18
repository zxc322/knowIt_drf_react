import endpoints from "../endpoints/endpoints";

class AuthService {
  login(email, password) {
    return fetch(endpoints.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            password: password
        })
      })
      .then(response => response.json()).then((data) => {
        if (data.access) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        return data
    })

  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService()