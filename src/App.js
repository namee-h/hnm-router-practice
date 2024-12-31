import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 1.전체상품페이지, 로그인페이지, 상품상세페이지
// 2.전체상품 페이지는 전체상품을 볼수있음
// 3.로그인 버튼을 누르면 로그인페이지가 나온다
// 4.상품디테일을 눌럿으나, 비로그인인 경우 로그인페이지가 나온다
// 5.로그인이 되어있을 경우 상품 디테일 페이지를 볼수있다
// 6.로그아웃 버튼을 클릭하면 로그아웃이 된다(다시로그인페이지가나타난다)
// 7.로그인을하면 로그아웃, 로그아웃을 하면 로그인
// 8.상품을 검색할 수있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true 면 로그인됨
  useEffect(()=>{
    console.log("authenticate",authenticate)
  },[authenticate])
  return (
    <div>
      <Navbar authenticate={authenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll setAuthenticate={setAuthenticate}/>} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
