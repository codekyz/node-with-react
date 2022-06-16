import React from "react";
import axios from "axios";
import Auth from "../../../hoc/auth";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get("/api/hello").then((response) => console.log(response));
  // }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>LogOut</button>
    </div>
  );
}

export default Auth(LandingPage, null);