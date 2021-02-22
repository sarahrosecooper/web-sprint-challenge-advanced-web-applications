import React, { useEffect } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(() => {
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers: {
          authorization:
            "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98",
        },
      })
      .then((res) => {
        axios
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
    <form>
      {/* //NOTE LOGIN INPUT */}

      <label htmlFor="username">
        username:{""}
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username, please"
          value=""
          onChange=""
        />
      </label>

      {/* //NOTE PASSWORD INPUT */}

      <label htmlFor="password">
        password:{""}
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password, please"
          value=""
          onChange=""
        />
      </label>
      <br></br>
      <button type="submit">ready to login?</button>
    </form>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
