import React from "react";
import "./main.css"
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Regist = (props) => {
  const history = useHistory();
  const RefText = React.useRef(null);
    

    window.setTimeout(() => {
      console.log(RefText);
    } , 1000);

    return (
      <div ref = {RefText}>
          <div>단어 추가하기!</div>
          <h3>단어</h3>
          <input type="text" ref ={RefText}
          onChange ={() => {
          console.log(props);
          }}/>
          <h3>설명</h3>
          <input/>
          <h3>예시</h3>
          <input/>
          <button>추가하기</button>
          <button onClick = {() =>{
            history.push("/")
          }}>돌아가기</button>
      </div>
  );
};






export default Regist;