import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Login.css";

const Login = () => {
  const [id, setId] = useState("");

  const [password, setPassword] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {}, [id, password]);

  const login = (e) => {
    axios
      .post("https://kmla-food.herokuapp.com/api/auth/login", {
        id: id,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // save token to local storage
          localStorage.setItem("token", response.data.token);
          window.location.href = "/admin";
        } else {
          alert("로그인에 실패하였습니다.");
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <div className="login-form">
        <h1>관리자 로그인</h1>
        <form>
          <input
            type="text"
            placeholder="아이디"
            className="text-field"
            value={id}
            onChange={onChangeId}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="text-field"
            value={password}
            onChange={onChangePassword}
          />
          <button className="submit-btn" onClick={login}>
            로그인
          </button>
          <button className="submit-btn" onClick={() => {
            window.location.href = "/register";
          }}>
            회원가입
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
