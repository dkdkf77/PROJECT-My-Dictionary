import React,{useEffect, useRef} from "react";
import "./main.css"
import { useHistory } from "react-router";

const Regist = (props) => {
  const history = useHistory();
  const RefText = useRef();

    useEffect(()=>{
      console.log(props.list);    
    })

    return (
      <>
          <div>단어 추가하기!</div>
          <h3>단어</h3>
          <input/>
          <h3>설명</h3>
          <input/>
          <h3>예시</h3>
          <input/>
          <button ref ={RefText} >추가하기</button>
          <button onClick = {() =>{
            history.push("/")
          }}>돌아가기</button>
      </>
  );
};






export default Regist;