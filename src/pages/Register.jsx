import axios from "axios";
import React, { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [secretKey, setSecretKey] = useState("");

  useEffect(() => {
  }, [id, name, password, passwordCheck, secretKey]);

  const register = (e) => {
    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else if (id.length < 4 || id.length > 16) {
      alert("아이디는 4자 이상 16자 이하로 입력해주세요.");
      return;
    } else if (password.length < 6 || password.length > 20) {
      alert("비밀번호는 6자 이상 20자 이하로 입력해주세요.");
      return;
    } else if (name.length < 2 || name.length > 10) {
      alert("이름은 2자 이상 10자 이하로 입력해주세요.");
      return;
    } else if (secretKey != process.env.REACT_APP_REGISTER_KEY) {
      alert("비밀키가 일치하지 않습니다.");
      return;
    }
    axios
      .post("https://kmla-food.herokuapp.com/api/auth/register", {
        name: name,
        id: id,
        password: password,
        isAdmin: false,
        isTeacher: false,
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/login";
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <div className="login-form">
        <h1>관리자 회원가입</h1>
        <form>
          <input
            type="text"
            placeholder="이름"
            className="text-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="아이디"
            className="text-field"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="text-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="text-field"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          <input
            type="text"
            placeholder="가입용 비밀 키"
            className="text-field"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />
          <button className="submit-btn" onClick={register}>
            회원가입
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
