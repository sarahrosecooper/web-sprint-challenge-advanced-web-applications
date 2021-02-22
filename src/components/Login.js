import React, { useState, useEffect } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  console.log("credentials", credentials);

  const { push } = useHistory();

  const [error, setError] = useState("");

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then((response) => {
        console.log("submitLogin response success", response);
        localStorage.setItem("token", response.data.payload);
        push("/protected");
      })
      .catch((error) => {
        console.log("submitLogin response error", error);
        setError("Username or Password not valid.");
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/1`, {
        headers: {
          authorization:
            "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98",
        },
      })
      .then((res) => {
        axiosWithAuth()
          .get(`http://localhost:5000/api/colors`, {
            headers: {
              authorization: "",
            },
          })
          .then((res) => {
            console.log(res);
          });
        console.log(res);
      });
  });

  return (
    <div>
      <form onSubmit={submitLogin}>
        {/* //NOTE LOGIN INPUT */}

        <label htmlFor="username">
          username:{""}
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username, please"
            value={credentials.username}
            onChange={handleChanges}
          />
        </label>

        {/* //NOTE PASSWORD INPUT */}

        <label htmlFor="password">
          password:{""}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password, please"
            value={credentials.password}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <button type="submit">ready to login?</button>
      </form>

      {error ? <div style={{ color: "red" }}>{error}</div> : ""}
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
