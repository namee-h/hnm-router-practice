import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
const Navbar = ({authenticate}) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate =useNavigate();
  const goToLogin=()=>{
    if(authenticate!==true){
        navigate("/login")
    }else if(authenticate!==false) {
        authenticate = false;
        navigate('/')
    }
    
  }
  const search = (event)=>{
    if(event.key === "Enter"){
        //  입력한 검색어를 읽어와서 url을 바꿔준다
        let keyword = event.target.value;
        navigate(`/?q=${keyword}`)
    }
  }
 useEffect(()=>{
    
 },[authenticate])
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate!==true?"로그인":"로그아웃"}</div>
        </div>
      </div>
      <div className="nav-logo">
        <img
          width={150}
          src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-box">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input type="text" placeholder="제품검색" onKeyDown={search}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
